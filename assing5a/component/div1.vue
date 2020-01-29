<template>
  <div
    :colors="stylobj"
    v-bind:style="{ 'background-color': flag ? 'green' : 'red' }"
    @click="chng()"
  >
    <h4>ID-1</h4>
    <p>
      <b>Color:{{ stylobj.backgroundColor }}</b>
    </p>
  </div>
</template>

<script>
export default {
  components: {},

  

  data() {
    return {
      flag: true,
      stylobj: {
        backgroundColor: "green"
      }
    };
  },
  methods: {
    chng: function() {
      this.flag = !this.flag;
      this.stylobj.backgroundColor = "red";
    }
  }
};
</script>

<style scoped>
.one {
  margin-left: 0 auto;
  padding: 10px;
  border-radius: 30px;
  background-color: green;
}

.green {
  background: green;
}

.red {
  background: red;
}
</style>
