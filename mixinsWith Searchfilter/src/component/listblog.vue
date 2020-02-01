<template>
  <div v-theme:column="'narrow'" id="showblog">
<h1>List of TitleBlogs</h1>
<input type="text" v-model="search" placeholder="search Blogs"/>
<div  v-for="(blog,index) in filteredblogs" :key="index" class = "singleblog">
    <h2 v-rainbow>{{blog.title|to-uppercase}}</h2>
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
//     filteredblogs:function(){
//       return this.blogs.filter((blog)=>{
// return blog.title.match(this.search);
//       });
//     }
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
