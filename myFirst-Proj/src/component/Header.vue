<template>
<header>
    <h1 v-on:click="chng">{{title}}</h1>
</header>
</template>

<script>
import {bus} from'../main'   
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
// this.$emit('chng','VueWiards');
this.title = 'Vue Wizards';
bus.$emit('titlechng','Vue Wizards');
      }
  }
}
</script>
<style scoped>
header{
    background:green;
    padding: 10px;

}
h1{
color:whitesmoke;
text-align: center;
}
</style>
