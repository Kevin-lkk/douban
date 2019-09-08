<template>
    <div>
        <h1>欢迎加入豆瓣</h1>
        <input type="text" placeholder="邮箱" name="email">
        <div class="imgga"> 
            <input type="password" id="pass" placeholder="密码">  
            <input type="text" placeholder="用户号" name="uname">
            <img src="../../../static/img/icon1.jpg">
        </div>
        <input type="submit" value="立即注册" id="sub" @click="fun()">
        <p>点击 [注册] 代表你已阅读并同意用户使用协议</p>
         <div id="bot">
           <a href="#">下载豆瓣App</a>
       </div>
        
       
    </div>
   
</template>

<script>
export default {
    methods:{
        fun(){
             // 得到输入框的内容
            var email=$("input").eq(0).val();
            var pass=$("input").eq(1).val();
            var uname=$("input").eq(2).val();
            
            console.log(email+","+uname+","+pass);
             $.ajax({
                url:"http://localhost:3000/register",
                type:"get",
                data:{email,uname,pass},
                success(data){
                console.log(data);
                if(data.linkid==1){
                    alert("注册成功");
                    window.location.href="http://localhost:8080/#/login";
                }else if(data.linkid==0){
                    alert("注册失败");
                 }
                }
            }) 
        }
    }
    
}
</script>

<style scoped>
   div{
        font-size:0.2rem;
    }
    h1{
        width:100%;
        font-weight:normal;
        line-height:1rem;
        color:#42bd56;
        text-align:center;
    }
    div>input{
    width:3.4rem;
    height:0.4rem;
    margin-left:0.15rem;
    border:1px solid #ccc;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    outline:0;
    font-size:0.17rem;
    text-indent:0.15rem;
}
.imgga{
    position: relative;
}
    img{
        width:0.3rem;
        height:0.2rem;
        margin:-1.5rem  0.1rem 0 3rem;
        position: relative;
        top: -0.3rem;
   }
   #sub{
        background:#17aa52;
        border:1px solid #17aa52;
        color:white;
        margin-top:0.15rem;
        border-radius: 3px;
        margin-bottom:0.2rem;
    }
     p{
        font-size:0.15rem;
        color:#aaa;
        text-align:center;
    }
       #bot a{
        width:100%;
        height:1rem;
        font-size:0.15rem;
        color:#42bd56;
        line-height:1rem;
        text-decoration: none;       
    }
    #bot{
        text-align:center;
    }
   
    
    
</style>