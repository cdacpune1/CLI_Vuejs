<template>
<header>
    <h1 v-on:click="chng">{{title}}</h1>
</header>
</template>

<script>
export default {
    props:{
        title:{
            type:String
        }
    },
  data() {
    return {
     title:'Vue Ninja'
    }
  },
  methods:{
      chng:function(){
this.$emit('chng','VueWiards');
      }
  }
}
</script>
<style scoped>
header{
    background: lightgreen;
    padding: 10px;

}
h1{
color:whitesmoke;
text-align: center;
}
</style>
