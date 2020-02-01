<template>
<div>
<app-header v-bind:title="title" v-on:chng="update($event)">
</app-header>
<app-ninjas v-bind:ninjas="ninjas"></app-ninjas>


<app-footer v-bind:title="title"></app-footer>

</div>
     </template>

<script>
import Header from'./component/Header.vue';
import Footer from'./component/Footer.vue';
import Ninjas from'./component/Ninjas.vue';

export default {
 components:{
'app-header':Header,
'app-footer':Footer,
'app-ninjas' :Ninjas
 },
 data() {
    return {
       ninjas: [
        { name: "Ryu", spl: "Digging", show: false },
        { name: "Oggy", spl: "Fighting", show: false },
        { name: "Mario", spl: "Working", show: false },
        { name: "Shang", spl: "GoodBoy", show: false },
        { name: "Mike", spl: "Fun", show: false }
      ],
     title:"Vue NINJAS"

    }
  },
  methods:{
    update :function(update) {
      this.title = update ;

    }
  }
}
</script>
<style scoped>

</style>
