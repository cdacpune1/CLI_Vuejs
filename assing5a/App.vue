<template>
  <div id="root">
    <div class="main">
      <div-1 class="one" :stylobj="stylobj"></div-1>
      <div-2 class="two"></div-2>
      <div-3 class="three"> </div-3>
      <div-4 class="four"></div-4>
      <div-5 class="five"></div-5>
      <div-6 class="six"></div-6>
    </div>

    <input type="text" /><br />
    <button id="bt1" class="btn" v-on:click="show($event)">Click</button>

    <input type="text" />
  </div>
</template>

<script>
import div1 from "./component/div1.vue";
import div2 from "./component/div2.vue";
import div3 from "./component/div3.vue";
import div4 from "./component/div4.vue";
import div5 from "./component/div5.vue";
import div6 from "./component/div6.vue";

export default {
  components: {
    "div-1": div1,
    "div-2": div2,
    "div-3": div3,
    "div-4": div4,
    "div-5": div5,
    "div-6": div6
  },
  data() {
    return{
     
    }
    // (mydiv = document.querySelector("div")),
    //   (mybutton = document.getElementById("br1"));
    // return {};
  },
  // props: {
  //   colors : {
  //     type: String,
  //     required: true
  //   }
  // },
  props: ['stylobj'],
  methods: {
    show: function(event) {
      alert("Hi")
       this.flag = !this.flag;
        this.stylobj.backgroundColor = 'pink'
      // let color = "#";
      // for (let i = 0; i < 6; i++) {
      //   color += Math.floor(Math.random() * 16).toString(16);
      // }
      // return color;
      // mybutton.addEventListener('click', () => {
      //   mydiv.style.backgroundColor=show();

      //   })
    }

    // update :function(update) {
    //   this.title = update ;

    // }
  },

};
</script>
<style scoped>
.btn {
  float: right;
  outline: none;
  /* position: absolute; */
  /* right:0; */
  margin-top: 0px;
  margin-right: 80px;
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.main {
  display: grid;
  grid-template-columns: auto auto auto;

  grid-gap: 10px;
  padding: 10px;
  margin-left: 90px;
  margin-top: 50px;
  /* inline-size: center; */
  text-align: center;
  border: dashed slategray;
  border-radius: 25px;
  height: 600px;
  width: 800px;
}

#root {
  margin-left: 500px;
  background-color: ghostwhite;
  border-radius: 50px;

  border: solid black;
  height: 900px;
  width: 1000px;
}
input {
  outline: none;
  margin-top: 50px;
  margin-left: 400px;
  padding: 10px;
  border-radius: 10px;
}
</style>
