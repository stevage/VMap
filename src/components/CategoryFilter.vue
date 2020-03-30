<template lang="pug">
#CategoryFilter
    h4.mb0 Montrer:
    div(v-for="(category, i) of categories").mv2
        label.pa1(:for="`category-${i}`") 
            img.w1.v-mid(:src="category.icon")
            input.ma1(v-model="category.state" :id="`category-${i}`" type="checkbox" @change="filterChange")  
            | {{ category.label || category.category }}
</template>

<script>
import { EventBus } from '@/EventBus';
export default {
    name: 'CategoryFilter',
    data: () => ({
        categories: [
            {
                category: 'Je cherche',
                categories: [],
                state: true,
                icon: 'demand-marker.png',
            },
            {
                category: 'Je propose',
                categories: [],
                state: true,
                icon: 'offer-marker.png',
            },
        ],
    }),
    created() {
        window.CategoryFilter = this;
    },
    methods: {
        filterChange() {
            EventBus.$emit('filter-change', this.categories);
        },
    },
};
</script>

<style scoped>
</style>