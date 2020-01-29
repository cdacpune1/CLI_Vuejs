<template>
<div  v-bind:style='{"background-color" : (flag ? "green" : "yellow" )}' @click="chng()">
     <h4>ID-2:</h4> 
   <p><b>Color:{{stylobj.backgroundColor}}</b></p>
</div>
</template>

<script>
export default {
    components:{
      
  },
  data() {
    return {
       flag:true,
 stylobj:{
    backgroundColor:'green' 
  }
}
  },
  methods: {
     chng:function(event){
  this.flag = !this.flag;
this.stylobj.backgroundColor = 'yellow'

   }

  }
}
</script>
<style scoped>
.two{
   border-radius: 30px;
  /* display: inline-block;  */
margin-left: 0 auto;
padding: 10px;
}
.green{
  background:green;
}
.yellow{
  background:yellow;
}
</style>
