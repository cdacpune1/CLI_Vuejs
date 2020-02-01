<template>
  <div>
    <form-helper>
     <div slot="form-header">
       <h3>This is title of form</h3>
       <p>Info about the form</p>
     </div>
     <div slot="form-fields">
       <input type="text" placeholder="name" required/>
         <input type="password" placeholder="pass" required/>
     </div>
     <div slot="form-control">
       <button v-on:click="submit">Submit</button>
     </div>
    </form-helper>
  </div>
</template>

<script>
import fromHelper from'./components/formHelper.vue'
export default {
 components:{
'form-helper':fromHelper
 },
  data () {
    return {
      title:'I am a dynamic slot title'
      
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
