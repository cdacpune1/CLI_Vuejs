<template>
  <div  v-bind:style='{"background-color" : (flag ? "green" : "blue" )}' @click="chng()">
           <h4>ID-4</h4> 
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
  this.stylobj.backgroundColor = 'blue'


   }

  }
}
</script>

<style scoped>
.four {
 /* display: inline-block;  */
margin-left: 0 auto;
padding: 10px;
border-radius: 30px;

}
.green{
  background:green;
}
.blue{
  background: blue;
}
</style>
