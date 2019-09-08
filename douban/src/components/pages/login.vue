<template>
<div>
    <div class="Spandd">
        <span @click="fun()">取消</span>
        <span>登录豆瓣</span>
        <input type="text" placeholder="邮箱" name="email"><br>
    </div>
    <div class="imgg">
    <input type="password" id="pass" placeholder="ToKen">
    <img src="../../../static/img/icon1.jpg">
    </div>
    <input type="submit" id="sub" value="登录" @click="fun1()">
    <p>使用其他方式登录 & 找回密码</p>
    <div class="lian">
           <a href="http://localhost:8080/#/register">注册豆瓣账号</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">下载豆瓣App</a>
    </div>

    
     
</div>
    
</template>

<script>
export default {
    methods:{
        fun(){
            // 回退上一个历史记录
            this.$router.go(-1);
        },
        fun1(){
            // 得到输入框的值
            var email=$("input").eq(0).val();
            var pass=$("input").eq(1).val();
            console.log(email+","+pwd);

            $.ajax({
                url:"http://localhost:3000/login",
                type:"post",
                data:{email,pass},
                success(data){
                  console.log(data);
                  if(data.linkid==2){
                      alert("登录成功");
                      location.href="http://localhost:8080/#/index";
                  }else if(data.linkid==3){
                      alert("登录失败");
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
.Spandd{
    width:100%;
    height:0.5rem;
    border-bottom:1px solid #eee;
    line-height:0.5rem;
    margin-bottom:0.3rem;
}
.Spandd span:nth-child(1){
    font-size: 0.15rem;
    color: green;
    margin-left: 0.15rem;
    margin-right: 0.9rem;
}
.Spandou span:nth-child(2){
    font-size: 0.19rem;
    color: black;
    font-weight: 999;
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
    margin-top: 0.4rem;
}
#pass{
    margin-top: 0.5rem;
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
.imgg{
    position: relative;
}
   
img{
        width:0.3rem;
        height:0.2rem;
        margin:-0.7rem  0.1rem 0 3rem;
        position: relative;
        top: -0.3rem;

       
}
.lian a{
     width:100%;
    height:1rem;
    font-size:0.15rem;
    color:#42bd56;
    line-height:1rem;
    text-decoration: none;
}
.lian a:nth-child(1){
    margin-left:0.78rem;
}
       
     
        
</style>