<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
import { sheets2geojson } from 'sheets2geojson';
import { EventBus } from '../EventBus';
export default {
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

        const sheetID =
            '2PACX-1vQZHOrhL8jW3t5R7Zr1lsZOg7WlOTvH8_F6kP5dCJn0oRsSwhLWAdM_odXCjFukhjZuPuZAH4Z4Ydy-';
        const points = await sheets2geojson(sheetID);
        let selected;
        map.U.onLoad(() => {
            map.U.setFillColor('water', 'hsl(200,50%,90%)');
            map.U.addGeoJSON('points', points, { generateId: true });
            map.U.addCircle('points-circles', 'points', {
                circleColor: [
                    'match',
                    ['get', 'Type'],
                    'Offer',
                    'hsl(140,90%,40%)',
                    'Request',
                    'hsl(330,100%,40%)',
                    'hsl(0,0%,50%)',
                ],
                circleStrokeColor: [
                    'match',
                    ['get', 'Type'],
                    'Offer',
                    'hsl(140,90%,20%)',
                    'Request',
                    'hsl(330,100%,20%)',
                    'hsl(0,0%,30%)',
                ],
                circleStrokeWidth: [
                    'case',
                    ['to-boolean', ['feature-state', 'selected']],
                    4,
                    1,
                ],
                circleRadius: {
                    stops: [
                        [10, 6],
                        [12, 14],
                    ],
                },
            });
            map.U.hoverPointer('points-circles');
            map.on('click', 'points-circles', e => {
                console.log(e);
                window.app.FeatureInfo.feature = e.features[0];
                if (selected) {
                    map.setFeatureState(selected, { selected: false });
                }
                selected = { source: 'points', id: e.features[0].id };
                map.setFeatureState(selected, { selected: true });
            });
            map.U.hoverPopup(
                'points-circles',
                f =>
                    `<h3>${f.properties.Type}</h3> ${f.properties.Description}</h3>`
            );
        });
    },
};
import 'mapbox-gl/dist/mapbox-gl.css';
</script>

<style scoped></style>
