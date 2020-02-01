<template>
  <div>
    <form-helper>
     <div slot="form-header">
       <h3>form 2-Login</h3>
       <p>Enter the details</p>
     </div>
     <div slot="form-fields">
       <input type="text" placeholder="name" required/>
         <input type="password" placeholder="pass" required/>
     </div>
     <div slot="form-control">
       <button v-on:click="submit">login</button>
     </div>
    </form-helper>
  </div>
</template>
<script>
import formHhelper from './formHelper.vue'
</script>