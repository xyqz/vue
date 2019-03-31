import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

import Home from "../components/Home.vue"
import Column from "../components/Column.vue"
import Detail from "../components/Detail.vue"
import Follow from "../components/Follow.vue"
// import List from "../components/List.vue"
import Login from "../components/Login.vue"
import Reg from "../components/Reg.vue"
// import Slider from "../components/Slider.vue"
import User from "../components/User.vue"
import Errorr from "../common/Errorr.vue"


let routes=[
  {path:"/home",component:Home},
  {path:"/column",component:Column},
  {path:"/detail",component:Detail,
  children:[{name:"detail",path:"/detail/:id",component:Detail}]
},
  {path:"/follow",component:Follow},
  {path:"/login",component:Login},
  {path:"/reg",component:Reg},
  {path:"/user",component:User},
  {path:"/",redirect:"/home"},
  {path:"*",component:Errorr}
  
]

let router=new Router({
  mode:"history",
  routes
})


export default router

