<template>
  <div >
    <h1>iTunes Media List</h1>
    <div
        v-for="item in info"
        :key="item.artworkUrl100">
      <p style="font-size: large; font-weight: bolder;">{{item.artistName}}:</p>
      <div>{{ item.wrapperType }}</div>
      <div>
        <img src="{{ item.previewUrl }}" alt="album artwork" width="500" height="800">
      </div>
    </div>
  </div>

  <div class="container-fluid mt-3">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
      <div class="col" v-for="item in info" :key="item.artworkUrl100">
        <div class="card h-100">
          <div class="card-body">
            <component :is="itemCardComponent(item)" :item="item"/>
            <!--Decorator does NOT reference as "item.media"-->
          </div>
          <div class="card-footer d-flex justify-content-end">
            <button v-if="item.isAvailable  && item.isAvailable() && item.checkOut"
                    class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
            <button v-else-if="item.checkIn" class="btn btn-outline-warning"
                    @click="item.checkIn()">Check In</button>
            <button class="btn btn-danger" @click="item.remove(item)">Delete</button>
          </div>
        </div>
      </div>
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
