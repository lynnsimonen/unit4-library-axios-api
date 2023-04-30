<template>
  <div class="card h-100">
    <div class="card-body">
      <component :is="itemCardComponent(item)" :item="item" />
    </div>
<!--    <div class="card-footer d-flex justify-content-end">-->
<!--      <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>-->
<!--      <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>-->
<!--    </div>-->
  </div>
</template>

<script>
import songDetails from "@/components/songDetails.vue";
import ItunesArray from "@/components/ItunesArray.vue";
export default {
  name: "LibraryItemCard",
  components: {songDetails},
  props: {
    item: {type: Object}
  },
  methods: {
    itemCardComponent(item){
      //return item.constructor.name + 'Card'; // will fail with webpack
      console.log('ItunesArray.data(item).kind', ItunesArray.data(item).kind)
      return ItunesArray.data(item).kind + 'Details';
    }
  },
}
</script>

<style scoped>

</style>