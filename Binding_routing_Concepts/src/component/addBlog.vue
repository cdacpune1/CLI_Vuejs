<template>
  <div id="add-blog">
      <h2 v-rainbow>Add new blog</h2>
<form v-if="!submited">
    <label>Blog_Title:</label>
    <input type="text" v-model.lazy="blog.title" required/>
    <label>Blog Content</label>
    <textarea v-model.lazy="blog.content"></textarea>
    <div id="checkbox">
    <label>Ninja</label>
    <input type="checkbox" value="ninjas" v-model="blog.categories"/>
    <label>Mike</label>
    <input type="checkbox" value="mike" v-model="blog.categories"/>
    <label>Mario</label>
    <input type="checkbox" value="mario" v-model="blog.categories"/>
    <label>Oggy</label>
    <input type="checkbox" value="oggy" v-model="blog.categories"/>
    </div>
    <label>Author:</label>
    <select v-model="blog.author">
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
       
    </select>
    <button v-on:click.prevent="post">AddBlog</button>
</form>
<div v-if="submited">
    <h2>Data Added Successfully</h2></div>
<div id="pre">
    <h3>Preview blog:</h3>
    <p v-rainbow>BlogTitle:{{blog.title|to-uppercase}}</p> 
    <p>BlogContent:{{blog.content}}</p>
    <p>BlogCata:</p>
    <ul>
        <li v-for="(cata,index) in blog.categories" :key="index">{{cata}}</li>
    </ul>
    <p>Author:{{blog.author}}</p>
</div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
       blog:{
             title:'',
             content:'',
             categories:[],
             author:''
       },
       authors:['the ninja','Avengers','Hulk'],
       submited:false
    
    }
  },
  methods:{
      post:function(){
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
              title:this.blog.title,
              body:this.blog.content,
              userId:1
          }).then(function(data){
            //   debugger;
              console.log(data);
              this.submited = true;
          });
      }

  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#pre{
    padding: 10px 20px;
    border :1px dotted;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkbox input{
    display: inline-block;
    margin-right: 10px;
}
#checkbox label{
    display: inline-block;
}
</style>
