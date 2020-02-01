<template>
  <div>
    <form-helper>
     <div slot="form-header">
       <h3>form 1-Contactus</h3>
       <p>Enter the details</p>
     </div>
     <div slot="form-fields">
       <input type="text" placeholder="name" required/>
       <label>UR Msg</label>
<textarea></textarea>
     </div>
     <div slot="form-control">
       <button v-on:click="submit">send</button>
     </div>
    </form-helper>
  </div>
</template>
<script>
import fromHelper from './formHelper.vue'
</script>