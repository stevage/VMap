<template lang="pug">
    #app.flex.flex-column.vh-100.avenir
        //- #top.bb.b--gray.bg-washed-yellow
        //-     h1 Carte d’entraide & de soutien aux soignants Covid-19
        #middle.flex.flex-auto
            #sidebar.br.b--light-gray.overflow-auto.w3.w-25-ns.pa2

                //- .b.i See the README for tips on customising.              
                h3 Carte d’entraide & de soutien aux soignants Covid-19
                CategoryFilter.mb4
                FeatureInfo
                p Ajoute tes souhaits ou tes propositions d’aides via le formulaire en ligne <a href="https://framaforms.org/entraide-soutien-aux-soignants-covid-19-1585006214">ici</a>.
                    
            #map-container.relative.flex-auto
                Map
                #overlay.absolute
        #bottom.bt.b--light-gray.flex-none
</template>

<script>
import Map from './components/Map.vue';
import FeatureInfo from './components/FeatureInfo.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';
import { EventBus } from './EventBus';
window.app = {};
export default {
    name: 'app',
    components: {
        Map,
        FeatureInfo,
        CategoryFilter,
    },
    created() {
        window.app.App = this;
    },
};

require('tachyons/css/tachyons.min.css');
</script>

<style>
html,
body {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
}
#sidebar {
    min-width: 200px;
}
</style>
