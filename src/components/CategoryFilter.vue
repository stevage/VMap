<template lang="html">
    <div class="">
      <h4>Montrer:</h4>
      <div v-for="c in categories">
        <img :src="c.icon" class="w1 v-mid">
        <input type="checkbox" v-model="c.state" @change="(setSubCategories(c))" class="headBox">
        <span>{{c.category}}</span>
        <div v-for="s in c.subCategories">
          <div>
            <input type="checkbox" v-model="s.state" :name="s.name" @change="(setCategories(s,c))" class="subBox">
            <label :for="s.name">{{s.name.slice(0, -1)}}</label>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { EventBus } from '@/EventBus';
export default {
    name: 'CategoryFilter',
    data: () => ({
        categories: [
            {
                category: 'Je cherche',
                subCategories: [
                  {
                    name : 'Autres,',
                    state: true
                  },
                  {
                    name : 'Logement,',
                    state: true
                  },
                  {
                    name : 'Matériel médical,',
                    state: true
                  }
                ],
                state: true,
                icon: 'demand-marker.png',
            },
            {
                category: 'Je propose',
                subCategories: [
                  {
                    name : 'Autres,',
                    state: true
                  },
                  {
                    name : 'Faire des courses,',
                    state: true
                  },
                  {
                    name : "Garde d'enfants,",
                    state: true
                  },
                  {
                    name : 'Linge propre,',
                    state: true
                  },
                  {
                    name : 'Livraison de nourriture,',
                    state: true
                  },
                  {
                    name : 'Livraison,',
                    state: true
                  },
                  {
                    name : 'Logement,',
                    state: true
                  },
                  {
                    name : 'Matériel médical,',
                    state: true
                  }
              ],
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
        setCategories(s, cat){
          for (let c of this.categories) {
            if (c.category == cat.category) {
              if (s.state) c.state = true
            }
          }
          this.filterChange()
        },
        setSubCategories(cat){
          for (let c of this.categories) {
            if (c.category == cat.category) {
              for (let sb of c.subCategories) {
                sb.state = cat.state
              }
            }
          }
          this.filterChange()
        }
    },
};
</script>

<style scoped>
.headBox{
  margin-left: 5px;
  margin-right: 5px;
}
.subBox{
  margin-left: 30px;
  margin-right: 5px;
}
</style>
