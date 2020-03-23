<template lang="pug">
    #app.flex.flex-column.vh-100.avenir
        //- #top.bb.b--gray.bg-washed-yellow
        //-     h1 Community Map
        #middle.flex.flex-auto
            #sidebar.br.b--light-gray.overflow-auto.w3.w-25-ns.pa2

                //- .b.i See the README for tips on customising.              
                FeatureInfo
                h3 Medical equipment sharing map
                p Add requests and offers in this <a href="https://docs.google.com/spreadsheets/d/1wdGYpuyu0ce8_L_JPdxTrjhgcxkOXjPX1G_Y529H9iU/edit#gid=0">Google Sheet</a>.
                    
            #map-container.relative.flex-auto
                Map
                #overlay.absolute
        #bottom.bt.b--light-gray.flex-none
</template>

<script>
import Map from './components/Map.vue';
import FeatureInfo from './components/FeatureInfo.vue';
import { EventBus } from './EventBus';
window.app = {};
export default {
    name: 'app',
    components: {
        Map,
        FeatureInfo,
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
