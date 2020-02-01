<template>
  <div>
    <keep-alive>
  <component v-bind:is="component"></component>
    </keep-alive>
  <button v-on:click="component='formOne'">show form One</button>
   <button v-on:click="component='formTwo'">show form two</button>
  </div>
</template>

<script>
import formOne from'./components/fromOne.vue'
import formTwo from'./components/formTwo.vue'
export default {
 components:{
'formOne':formOne,
'formTwo':formTwo
 },
  data () {
    return {
      component:'formTwo'
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
