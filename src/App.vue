<template lang="pug">
    #app.flex.flex-column.vh-100.avenir
        //- #top.bb.b--gray.bg-washed-yellow
        //-     h1 Carte d’entraide & de soutien aux soignants Covid-19
        #middle.flex.flex-auto
            #sidebar.br.b--light-gray.overflow-auto.pa2-ns(:class="{ collapsed: !sidebarOpen}")
                .container.br.bg-white.b--light-gray.overflow-auto.pa2.bw2

                    //- .b.i See the README for tips on customising.              
                    h3 Carte d’entraide & de soutien aux soignants Covid-19
                    CategoryFilter.mb4
                    FeatureInfo
                    div.tc
                        .dib.ba.b--dark-blue.dim.pointer.pa3.bg-blue.white.br1(@click="sidebarOpen=false") Voir la carte

                    p Ajoute tes souhaits ou tes propositions d’aides via le formulaire en ligne <a href="https://framaforms.org/entraide-soutien-aux-soignants-covid-19-1585006214">ici</a>.
                    
            #sidebar-rim.relative.br.b--gray.bw2(v-show="!sidebarOpen"  style="width:20px" @click="sidebarOpen = true")
            #map-container.relative.flex-auto
                Map
                #sidebarToggle.absolute.bg-white.f3.br.bt.bb.br--right.br-100.b--magenta.bw1.magenta.pa1.pointer.grow.fw8(@click="sidebarOpen = !sidebarOpen")
                  span(v-if="!sidebarOpen") &rarr;
                  span(v-if="sidebarOpen") &larr;
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
    data() {
        return {
            sidebarOpen: true,
        };
    },
    created() {
        window.app.App = this;
        EventBus.$on('select-feature', () => (this.sidebarOpen = true));
    },
    watch: {
        sidebarOpen() {
            this.$nextTick(() => window.map.resize());
        },
    },
};

require('tachyons/css/tachyons.min.css');
</script>

<style scoped>
html,
body {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

#sidebarToggle:hover {
    background: hsl(333, 100%, 95%);
}

#sidebar.collapsed {
    position: absolute;
    animation-duration: 0.5s;
    animation-name: slideout;
    pointer-events: none;
    animation-fill-mode: forwards;
}

#sidebar {
    animation-duration: 0.5s;
    animation-name: slidein;
    z-index: 1;
    width: 310px;
}

@keyframes slidein {
    from {
        transform: translate(-310px, 0);
    }
    to {
        transform: translate(0px, 0);
    }
}
@keyframes slideout {
    from {
        transform: translate(0px, 0);
    }
    99% {
        opacity: 1;
    }
    to {
        transform: translate(-310px, 0);
        opacity: 0; /* The sidebar will still be present, so we need to hide it. Relies on animation-fill-mode: forwards*/
    }
}

#sidebarToggle:hover {
    background: hsl(220, 100%, 95%);
}

/* Exists to ensure whole sidebar animates together */
.collapsed .container {
    height: 100vh;
}
</style>

<style>
@media screen and (min-width: 768px) {
    .only-mobile {
        display: none;
    }
}
@media screen and (max-width: 767px) {
    .not-mobile {
        display: none;
    }
}
</style>