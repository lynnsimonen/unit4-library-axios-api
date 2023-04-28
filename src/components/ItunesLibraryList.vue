<template>

</template>

<script>
import axios from "axios";
export default {
  name: "ItunesLibraryList",
  data() {
    return {
      posts: [],
      errorMsg: '',
    }
  },
  methods: {
    getPosts(){
      axios.get('https:jsonplaceholder.typicode.com/posts?id=23')
          .then((response) =>{
            console.log(response.data)
            this.posts = response.data
          })
          .catch((error)=> {
            console.log(error)
            this.errorMsg = 'Error retrieving data'
          })
    }
  }
}
</script>

<style scoped>

</style>