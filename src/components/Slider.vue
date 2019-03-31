<template>
  <swipe class="my-swipe">
    <swipe-item class="slide1" speed="10"><img src="http://img.weitiyuba.com/mmbiz/ZBCCexZtUuURrtTtHzcia56rgKaV1EvEic5UZRAecsssIlydvBrXicUNcTYC3t5fHUP61xwLiarKUKtdV16UOAZfkw/0?wx_fmt=jpg" alt="" style="width:100%;height:100%"></swipe-item>
    <swipe-item class="slide2"><img src="http://pic1.win4000.com/wallpaper/5/5459e0454e42c.jpg" style="width:100%;height:100%"></swipe-item>
    <swipe-item class="slide3"><img src="http://img4.imgtn.bdimg.com/it/u=1139900709,2612606581&fm=26&gp=0.jpg" alt="" style="width:100%;height:100%"></swipe-item>
</swipe>
</template>
<script>
// import Swipe from "../assets/js/swipe.js"
import "vue-swipe/dist/vue-swipe.css"
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    name:"Slider",
    components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
    mounted(){
      
    }
}
</script>


<style scoped>
.my-swipe {
  height: 300px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 35px
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}


</style>


