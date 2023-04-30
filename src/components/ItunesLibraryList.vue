<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in ItunesArray.library" :key="item.collectionName">
      <library-item-card :item="item"/>
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
import ItunesArray from "@/components/ItunesArray.vue";
//import {Song} from "@/models/Media";
export default {
  name: "ItunesLibraryList",
  computed: {
    ItunesArray() {
      return ItunesArray
    }
  },
  components: {LibraryItemCard},
}
</script>

<style scoped>

</style>