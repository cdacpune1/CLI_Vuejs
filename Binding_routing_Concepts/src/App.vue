<template>
  <div>
    <app-header></app-header>
<!-- <add-blog></add-blog> -->
<!-- <show-blog></show-blog>
<list-blog></list-blog> -->
<router-view></router-view>
  </div>
</template>

<script>
import addBlog from'./component/addBlog';
import showblog from'./component/showblog';
import listblog from'./component/listblog';
import header from'./component/header';



export default {
  components:{
'add-blog':addBlog,
'show-blog':showblog,
'list-blog':listblog,
'app-header':header
  },
  data () {
    return {
   
    }
  },
  methods:{

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

</style>
