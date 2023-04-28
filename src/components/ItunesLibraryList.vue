<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.name">
      <library-item-card :item="item"/>
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
//import {Song} from "@/models/Media";
export default {
  name: "ItunesLibraryList",
  components: {LibraryItemCard},
  data() {
    return {
      posts: [],
    }
  },

}
</script>

<style scoped>

</style>