<template>
    <div class="home">
        <Slider></Slider>
        <list :list="list" :dataName="dataName"></list>
    </div>
</template>




<script>

import Slider from "./Slider.vue";
import List from "./List"
export default {
    data(){
        return {
        list:[],
        dataName:"homet"
        }
    },
    components:{
        Slider,
        List
    },
    mounted(){
        this.$root.$data.blloading=true
        axios({
            // url:baseUrl.localhost + "/data/index.data"
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

