module.exports ={
   devServer:{
       port:8002,
       open:false,
       proxy:{
        "/api":{
            target:"http://47.100.98.132",
            changeOrigin:true,
            ws:true
        },
        
       '/zjh':{// axios 访问 /douban == target + '/douban'
        target:'http://47.101.129.105/api',
        changeOrigin:true,
        pathRewrite:{//路径替换
        '^/zjh':'',// axios 访问/douban/v2 == target + /v2
        }
    } 
    }
   },
  
}


