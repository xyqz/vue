<template>
<div class="newsList">
    <list :list="list" :dataName="dataName"/>
</div>
</template>


<script scoped>
import List from "./List.vue"
export default {
  data(){
     return {
       list:[],
       dataName:"follow"
     }
  },
  components:{
    List
  },
  mounted(){
    this.$root.$data.blloading=true
    axios({
      url:"/zjh/list",
     
    }).then(
      res=>{
          this.list=res.data.data
          this.$root.$data.blloading=false
          this.$root.$data.blnav=true
          this.$root.$data.blfooter=true
      }
    )
  }
}
</script>

<style scoped>
    .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
   
  </style>
