const http=require("http");
const url=require("url");
const fs=require("fs");
const dyh=require("./mysql");
var ddd;
//创建服务器
var app=http.createServer();
//绑定监听端口
app.listen(1010)
//绑定监听请求事件
app.on("request",(req,res)=>{
    var obj=url.parse(req.url,true)
    // console.log(obj);
    var arr=obj.pathname.split(".");
    if(obj.pathname=="/" || obj.pathname=="/index"){
        fs.readFile("./public/index.html",(err,buf)=>{
            res.end(buf);
        })
    }else if(arr[arr.length-1]=="css" || arr[arr.length-1]=="js" || arr[arr.length-1]=="jpg"){
        fs.readFile("./public"+arr.join("."),(err,buf)=>{
            res.end(buf);
		})
    }else if(obj.pathname=="/gsj"){
        dyh.sel(res);
        // console.log(dyh);
    }else if(obj.pathname=="/dl"){
        fs.readFile("./public/html/dl.html",(err,buf)=>{
            res.end(buf)
        })
    }else if(obj.pathname=="/isOK"){
        var uname=obj.query.uname;
        var psw=obj.query.psw;
        // console.log(obj)
        dyh.sel1(res,uname,psw);
    }else if(obj.pathname=="/yhc"){
        fs.readFile("./public/html/yhc.html",(err,buf)=>{
            res.end(buf);
        })
    }else if(obj.pathname=="/into"){
        arr=[];
        for(var i in obj.query){
            arr.push(obj.query[i]);
        }
        // console.log(arr);
        dyh.into(res,arr)
    }else if(obj.pathname=="/del"){
        var id=obj.query.id;
        dyh.del(res,id)
    }
    else if(obj.pathname=="/update"){
        fs.readFile("./public/html/update.html",(err,buf)=>{
            res.end(buf)
        })
    }
    else if(obj.pathname=="/zzz"){
        var id=obj.query.id;
        ddd=id;
        dyh.zzz(res,id);
        // console.log(id);
    }
    else if(obj.pathname=="/upd"){
        // var id=obj.query.id;
        // console.log(obj.query);
        var arr=[];
        for(var i in obj.query){
            arr.push(obj.query[i])
        }
        // console.log(arr);
        dyh.upd(res,arr,ddd);
    }
})