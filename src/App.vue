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

  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.name">
      <h6>Media Type: {{ item.kind }}</h6>
      <h6>Artist Name: {{ item.artistName }}</h6>
      <h6>Collection Name: {{ item.collectionName }}</h6>
      <!--      <library-item-card :item="item"/>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Itunes} from "@/models/Itunes";
//import {ItunesCollectionFactory} from "@/models/ItunesCollectionFactory";
import ItunesLibraryCollection from "@/models/ItunesLibraryCollection";

export default {
  name: "App",
  data() {
    return {
      library: [],
      errorMsg: '',
      apiURL: 'https://itunes.apple.com/search?term=mash',
      axiosParams: {
        limit: 36,
      },
      errored: false,
      searchTerm: '',
      searching: true,
    }
  },
  created() {    //this will list api on load instead of waiting for button click
    //this.getLibrary()   //TODO: remove when using searchTerm
    this.searchItunes()
  },
  methods: {
    clearResults() {
      this.searchResults = new ItunesLibraryCollection();
    },
    searchItunes() {
      if (this.searchTerm) {
        //this.clearResults();  //TODO: figure out that function
        this.searching = true;
        Itunes
            .search(this.searchTerm)
            .then(response => {
              console.log('api response', response);
              if (response.data.results.length > 0) {
               // this.searchResults = ItunesCollectionFactory.createFromItunes(response.data.results)
                console.log('response.data.results: ' + response.data.results)
                this.library = response.data.results
              }
              console.log(this.searchResults);
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
    getLibrary() {
      axios
          .get(this.apiURL, {params: this.axiosParams})
          .then((response) => {
            console.log(response.data.results)
            this.library = response.data.results
          })
          .catch((error) => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
    },
  },
}
</script>

<style scoped>

</style>