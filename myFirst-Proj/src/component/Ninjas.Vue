<template>
  <div id="ninjas">
    <ul>
      <li
        v-for="(ninja, i) in ninjas"
        :key="i"
        v-on:click="ninja.show = !ninja.show"
      >
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.spl }}</h3>
      </li>
    </ul>
<button v-on:click="deleteNinja">Delete</button>
  </div>
</template>

<script>
export default {
    //props:['ninjas'],========OR=========== 
//prop as Object:


props:{
    ninjas:{
        type:Array,
        required:true
    }
},

data () {
    return {
     
    }
  },
  methods:{
      deleteNinja:function(){
          this.ninjas.pop();
      }
  },
  //lifeCycle of HOOKS 
  beforeCreate(){
      alert('BeforeCreate');

  },
  created(){
      alert('Created');

  },
  beforeMount(){
      alert('Beforemount');

  },
 mounted(){
      alert('Mounted');

  },
  beforeUpdate(){
      alert('BeforeUpdate');

  },
  updated(){
      alert('Updated');

  },
  beforeDestroy(){
      alert('BeforeDestroy');

  },
  destroyed(){
      alert('DESTROYED');

  }

}
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid black;
  margin: 10px;
}
</style>
