<template>
  <div>
          <!-- <slot name="title"></slot>

    <h1>I am Form Helper</h1>
              <slot name="text"></slot> -->
<h1>plz fill out the form</h1>
<form>
    <div id="form-header">
        <slot name="form-header"></slot>
    </div>
    <div id="form-fields">
        <slot name="form-fields"></slot>
    </div>
    <div id="form-control">
        <slot name="form-control"></slot>
    </div>
    <div id="form-links">
        <ul>
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
            <li><a href="#">Link4</a></li>
        </ul>
    </div>
</form>


  </div>
</template>

<script>

export default {
 components:{


 },
  data () {
    return {
      
    }
  },
  methods:{

  }
}
</script>

<style>
h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#form-links ul{
    padding: 0;
}
#form-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}

h1{
    color: rebeccapurple;
}
</style>
