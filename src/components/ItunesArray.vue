<template>
  <nav class="navbar bg-dark p-3">
    <span class="navbar-brand text-light"><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
    <ul class="navbar-nav ml-auto">
      <li class="form-inline">
        <form @submit.prevent="searchItunes()" class="form-inline input-group">
          <input type="text" placeholder="Search"
                 class="mr-sm-2 form-control form-control-sm"
                 v-model="searchTerm">
          <button type="submit" class="btn my-2 my-sm-0 btn-secondary btn-sm"><i
              class="fas fa-search"></i></button>
        </form>
      </li>
    </ul>
  </nav>
  <!--      <library-item-card :item="item"/>-->
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.collectionArtistId">
      <div class="card h-100">
        <div class="card-body">
          <div class="song">
            <h3 class="card-title">{{ item.artistName }}</h3>
            <p class="card-text">Collection Name: {{ item.collectionName }}</p>
          </div>
        </div>
            <div class="card-footer d-flex justify-content-end">
<!--              <button v-if="LibraryItem.media.isAvailable && Library.media.checkOut && LibraryItem.media.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>-->
              <button  class="btn btn-outline-success" >Check Out</button>
<!--              <button v-else-if="LibraryItem.media.checkIn" class="btn btn-outline-warning" @click="LibraryItem.media.checkIn()">Check In</button>-->
              <button class="btn btn-outline-warning" >Check In</button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Itunes} from "@/models/Itunes";
import LibraryItem from "@/models/LibraryItem";
//import ItunesLibraryCollection from "@/models/ItunesLibraryCollection";
//import {ItunesCollectionFactory} from "@/models/ItunesCollectionFactory";
//import ItunesLibraryList from "@/components/ItunesLibraryList.vue";

export default {
  name: "ItunesArray",
  data() {
    return {
      library: [],
      errored: false,
      searchTerm: 'Fields of Gold',
      searching: true,
      //searchResults: ItunesLibraryCollection,
    }
  }, created() {    //this will list api on load instead of waiting for button click
    this.searchItunes()
  },
  methods: {
    LibraryItem,

    searchItunes() {
      if (this.searchTerm) {
        this.searching = true;
        Itunes
            .search(this.searchTerm)
            .then(response => {
              console.log('api response', response);
              if (response.data.results.length > 0) {
                this.library = response.data.results
                //this.searchResults = ItunesCollectionFactory.createFromItunes(response.data.results)
              }
              console.log('response.data.results: ', response.data.results)
              console.log('this.searchResults: ', this.searchResults);
            })
            .catch(error => {
              console.error("AJAX SEARCH ERROR", error)
            })
            .finally(() => {
              this.searching = false;
              this.loading = false;
            })
      }
    },
  },
}
</script>

<style scoped>

</style>