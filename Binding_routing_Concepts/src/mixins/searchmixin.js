export default{
    computed:{

        filteredblogs:function(){
            return this.blogs.filter((blog)=>{
      return blog.title.match(this.search);
            });
          }
    }

}