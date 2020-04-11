<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
import { sheets2geojson } from 'sheets2geojson';
import { EventBus } from '../EventBus';
export default {
    data: () => ({
        selectedId: -1,
    }),
    async mounted() {
        // replace this Mapbox access token with your own
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNmNGV5enAwMTF1M2tuejhtc2twcXo5In0.mLPrYIYJ2FiFZ3KMqVIj6w';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [-149.3296, -17.5697],
            zoom: 10,
            style: 'mapbox://styles/mapbox/streets-v11',
            hash: 'loc',
        });
        U.init(map, mapboxgl);
        window.map = map;
        window.app.Map = this;
        map.U.loadImage('Je propose', 'offer-marker.png');
        map.U.loadImage('Je cherche', 'demand-marker.png');
        map.U.loadImage('Je propose-selected', 'offer-marker-selected.png');
        map.U.loadImage('Je cherche-selected', 'demand-marker-selected.png');

        const sheetID =
            '2PACX-1vQZHOrhL8jW3t5R7Zr1lsZOg7WlOTvH8_F6kP5dCJn0oRsSwhLWAdM_odXCjFukhjZuPuZAH4Z4Ydy-';
        const points = await sheets2geojson(sheetID);
        let selected;
        map.U.onLoad(() => {
            map.U.setFillColor('water', 'hsl(200,50%,90%)');
            map.U.addGeoJSON('points', points, { generateId: true });

            map.U.addSymbol('points-pins', 'points', this.iconStyle);
            // textField: ['step', ['zoom'], '', 13, ['get', 'Service_Name']],
            // textOffset: [0, 1],
            // textOptional: true,
            // textSize: 14,
            // textHaloColor: 'hsla(60,20%,90%,0.8)',
            // textHaloWidth: 2,
            // textColor: 'hsl(331, 50%, 50%)',

            // map.U.addCircle('points-circles', 'points', {
            //     circleColor: [
            //         'match',
            //         ['get', 'Categorie'],
            //         'Je propose',
            //         'hsl(48.3, 83.7%, 52%)',
            //         'Je cherche',
            //         'hsl(12, 100%, 52.7%)',
            //         'hsl(0,0%,50%)',
            //     ],
            //     circleStrokeColor: [
            //         'match',
            //         ['get', 'Categorie'],
            //         'Je propose',
            //         'hsl(48.3, 83.7%, 30%)',
            //         'Je cherche',
            //         'hsl(12, 100%, 30%)',
            //         'hsl(0,0%,30%)',
            //     ],
            //     circleStrokeWidth: [
            //         'case',
            //         ['to-boolean', ['feature-state', 'selected']],
            //         4,
            //         1,
            //     ],
            //     circleRadius: {
            //         stops: [
            //             [10, 6],
            //             [12, 14],
            //         ],
            //     },
            // });
            map.U.hoverPointer('points-pins');
            map.U.clickOneLayer(
                ['points-pins'],
                e => {
                    console.log(e.features[0]);
                    EventBus.$emit('select-feature', e.features[0]);
                    if (selected) {
                        map.setFeatureState(selected, { selected: false });
                    }
                    this.selectedId = e.features[0].id;
                    selected = { source: 'points', id: e.features[0].id };
                    map.setFeatureState(selected, { selected: true });
                    this.$nextTick(() =>
                        map.U.setLayerStyle('points-pins', this.iconStyle)
                    );
                },
                e => {
                    if (selected) {
                        map.setFeatureState(selected, { selected: false });
                    }
                    this.selectedID = null;
                    EventBus.$emit('select-feature', null);
                }
            );
            map.U.hoverPopup(
                'points-pins',
                f =>
                    `<h3>${f.properties.Categorie}</h3> ${
                        f.properties.Description
                    }</h3>`
            );
        });
        EventBus.$on('filter-change', categories => {
            const filter = [
                'any',
                ...categories.map(
                    c =>
                        c.state
                            ? ['==', ['get', 'Categorie'], c.category]
                            : false
                ),
            ];
            console.log(JSON.stringify(filter, 2));
            map.U.setFilter('points-pins', filter);
        });
    },
    computed: {
        iconStyle() {
            console.log('iconstyle', this.selectedId);
            return {
                iconImage: [
                    'case',
                    ['==', ['get', 'id'], this.selectedId],
                    ['concat', ['get', 'Categorie'], '-selected'],
                    ['get', 'Categorie'],
                ],
                iconSize: this.iconSize,
                iconOffset: [0, -60],
                iconAllowOverlap: true,
                // iconAllowOverlap: ['==', ['get', 'id'], this.selectedId],
            };
        },
        iconSize() {
            return [
                'interpolate',
                ['linear'],
                ['zoom'],
                9,
                [
                    'case',
                    ['==', ['get', 'id'], this.selectedId || null],
                    0.25,
                    0.125,
                ],
                11,
                [
                    'case',
                    ['==', ['get', 'id'], this.selectedId || null],
                    0.375,
                    0.25,
                ],
            ];
        },
    },
};
import 'mapbox-gl/dist/mapbox-gl.css';
</script>

<style scoped>
</style>
