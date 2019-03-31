<template>
    <div class="appheader">
     <div class="nav">
      <ul>
        <router-link active-class="active" tag="li" to="/home"><a href="javascript:;" >首页</a></router-link>
        <router-link active-class="active" tag="li" to="/follow"><a href="javascript:;">关注</a></router-link >
        <router-link active-class="active" tag="li" to="/column"><a href="javascript:;">栏目</a></router-link>
      </ul>
    </div>
    </div>
</template>
<style scoped>
   .nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:blue;}
    .nav ul{width:4.38rem;height:0.6rem; margin:0 auto;z-index: 1000}
    .nav ul li{width:1.46rem;height:0.6rem; float:left;}
    .nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:gray;}
    .nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#fff;}
</style>

