<template>
  <div  v-bind:style='{"background-color" : (flag ? "green" : "violet" )}' @click="chng()"> 
     <h4>ID-5</h4> 

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
       ischng:true,
        stylobj:{
    backgroundColor:'green' 
  }

    }
  },
  methods: {
     chng:function(event){
  this.flag = !this.flag;
 
this.stylobj.backgroundColor = 'violet';
  
 
}
}
  }

</script>

<style scoped>
.five {
 /* display: inline-block;  */
margin-left: 0 auto;
padding: 10px;
border-radius: 30px;
}
.green{
  background:green;
}
.violet{
  background: violet;
}
</style>
