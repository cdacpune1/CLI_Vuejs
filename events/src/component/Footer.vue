 <template>
 <footer>
     <p>{{copyright}}.{{title}}</p>
 </footer>
</template>

<script>
export default {
props:{
    title:{
 type:String
    }
},

  data() {
    return {
        copyright:'copyright 2017 Ninjas'
    }
  }
}
</script>

<style scoped>
footer{
    background:gray;
    padding: 6px;

}
p{
    color:ivory;
    text-align: center;
}
</style>
