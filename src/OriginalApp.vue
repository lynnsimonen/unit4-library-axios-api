<template>
  <nav class="navbar bg-dark p-3">
    <span class="navbar-brand text-light"><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
    <ul class="navbar-nav ml-auto">
      <li class="form-inline">
        <form @submit.prevent="searchBooks()" class="form-inline input-group">
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
      <library-item-card :item="item"/>
    </div>
  </div>



</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      apiURL: 'https://itunes.apple.com/search?term=mash',
      info: null,
      loading: true,
      errored: false,
      searchTerm: 'U2',
      axiosParams: {
        limit: 36
        ,
      }
    }
  },
  methods: {
    itemCardComponent(item){
      //return item.constructor.name + 'Card'; //will fail with webpack
      return item.constructor.type + 'Details';
      //Decorator does NOT reference item.media.constructor.type
    },
    searchBooks() {
      //prepare and perform search
      if (this.searchTerm) {
        axios
            .get(this.apiURL,{params: this.axiosParams})
            .then(response => {
              this.info = response.data.results
              console.log(this.info)
            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
            .finally(() => this.loading = false)
      }
    }
  },
  created(){
    console.log('Library Item Card is: ' + Object +  typeof Object)
  },
  mounted() {
    axios
        .get(this.apiURL,{params: this.axiosParams})
        .then(response => {
          this.info = response.data.results
          console.log(this.info)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
