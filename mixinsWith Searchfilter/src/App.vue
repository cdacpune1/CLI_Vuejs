<template>
  <div>
<!-- <add-blog></add-blog> -->
<show-blog></show-blog>
<list-blog></list-blog>
  </div>
</template>

<script>
// import addBlog from'./component/addBlog';
import showblog from'./component/showblog';
import listblog from'./component/listblog';

export default {
  components:{
// 'add-blog':addBlog,
'show-blog':showblog,
'list-blog':listblog
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
