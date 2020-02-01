<template>
  <div v-theme:column="'narrow'" id="showblog">
<h1>All Blogs Article</h1>
<input type="text" v-model="search" placeholder="search Blogs"/>
<div  v-for="(blog,index) in filteredblogs" :key="index" class = "singleblog">
   <router-link v-bind:to="'/blog/' + blog.id"> <h2 v-rainbow>{{blog.title|to-uppercase}}</h2></router-link>
    <article>{{blog.body|snnipet}}</article>
</div>
 </div>
</template>

<script>
import searchmixin from '../mixins/searchmixin';

export default {


  data () {
    return {
   blogs:[],
   search:''
    }
  },
  methods:{

  },
  created(){
       this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
           this.blogs = data.body.slice(0,10);
       })

  },
  computed:{
    
  },
  mixins:[searchmixin]
  
 
}
</script>

<style>
#showblog{
  max-width: 800px;
  margin: 0 auto;
}
.singleblog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;

}
</style>
