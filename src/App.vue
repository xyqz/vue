<template>
  <div id="app">
     <loading v-show="this.$root.$data.blloading"></loading>
     <app-header v-show="this.$root.$data.blnav"></app-header>
     <router-view></router-view>
     <app-footer v-show="this.$root.$data.blfooter"></app-footer>
  </div>
  
</template>
<script>
import AppHeader from "./common/AppHeader.vue"
import AppFooter from "./common/AppFooter.vue"




export default {
  methods:{
    show(){
      this.$router.push("/about")
    }
  },
  components:{
    AppHeader,AppFooter
  }
 
}
</script>

<style>

</style>
