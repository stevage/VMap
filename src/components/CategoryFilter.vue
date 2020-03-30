<template lang="pug">
#CategoryFilter
    h4.mb0 Montrer:
    div(v-for="(category, i) of categories")
        input.ma1(v-model="category.state" :id="`category-${i}`" type="checkbox" @change="filterChange")  
        label.pa1(:for="`category-${i}`") {{ category.label || category.category }}
</template>

<script>
import { EventBus } from '@/EventBus';
export default {
    name: 'CategoryFilter',
    data: () => ({
        categories: [
            { category: 'Je cherche', categories: [], state: true },
            { category: 'Je propose', categories: [], state: true },
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