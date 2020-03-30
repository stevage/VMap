<template lang="pug">
div(v-if="p" :class="{[p.Type]: true}").ba.bw2.br4.b--light-gray.pa2.mb5
    img.image(v-if="imageUrl" :src="imageUrl")
    h1.f3 {{ p.Identification }}
    div
        .dib.b.ba.br4.b--light-blue.pa2 {{ p.Categorie }}
    p {{ p.Description }}
    table
        tr(v-if="p.Conditions.trim()")
            th Conditions
            td {{ p.Conditions }}
        tr.i(v-if="p.Commentaires.trim()")
            th Commentaires
            td {{ p.Commentaires }}
        tr(v-if="p.Date.trim()")
            th Date
            td {{ p.Date }}

        tr(v-if="p.Phone")
            th Phone
            td {{ p.Phone }}
        tr(v-if="p.Email")
            th Email
            td {{ p.Email }}
        tr(v-if="p.OtherContact")
            th Contact
            td {{ p.OtherContact }}
    //- table#FeatureInfo(v-if="feature").bg-white.b--gray.ba.helvetica.ma1
    //-     tr(v-for="(value, prop) in p")
    //-         template(v-if="ignoreProps.indexOf(prop) === -1")
    //-             th.f6 {{ prop }}
    //-             td.f6 {{ value }}
</template>

<script>
import { EventBus } from '../EventBus';
export default {
    name: 'FeatureInfo',
    data: () => ({
        feature: undefined,
        ignoreProps: ['id', 'Longitude', 'Latitude', 'image_url'],
        // fields: [
        //     ['Identification'],
        //     ['
    }),
    computed: {
        p() {
            return this.feature && this.feature.properties;
        },
        imageUrl() {
            return this.p && this.p.image_url;
        },
    },
    created() {
        window.app.FeatureInfo = this;
        EventBus.$on('select-feature', feature => (this.feature = feature));
    },
};
</script>

<style scoped>
#FeatureInfo th {
    text-align: right;
}

.image {
    width: 100%;
}
th {
    text-align: right;
    vertical-align: top;
    padding: 5px;
}

.Request {
    border-color: hsl(330, 100%, 40%);
}

.Offer {
    border-color: hsl(140, 90%, 40%);
}
</style>
