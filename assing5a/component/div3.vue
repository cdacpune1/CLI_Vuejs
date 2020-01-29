
<template>
<div  v-bind:style='{"background-color" : (flag ? "green" : "pink" )}' @click="chng()">
     <h4>ID-3</h4> 
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
  this.stylobj.backgroundColor = 'pink'


   }

  }
}
</script>

<style scoped>
.three {
  border-radius: 30px;
 /* display: inline-block;  */
margin-left: 0 auto;
padding: 10px;
}
.green{
  background:green;
}
.pink{
  background:pink;
}


</style>