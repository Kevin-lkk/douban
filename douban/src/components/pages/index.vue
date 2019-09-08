
<template>
    <div>
        <!-- <div class="footer">
            <a href="#"><img src="../../../static/img/db.png" id="imgs"></a>
            <div class="right">
                <a href="#">电影</a>
                <a href="#">图书</a>
                <a href="#">光布</a>
                <a href="#">小组</a>
                <a href="#"><img src="../../../static/img/sx.png"></a>
            </div>
        </div> -->
        
        <div class="mv">
            <ul class="uls">
                <li><a href="#">影院热映</a></li>
                <li><a href="#">欧美新碟帮</a></li>
                <li><router-link to="/login">注册账号</router-link></li>
                <li><router-link to="/register">登录豆瓣</router-link></li>
            </ul>
        </div>
        <routerlk></routerlk>
         <love></love>
    </div>

</template>

<script>
import routerlk from '.././routerlk'
import love from '.././love'

export default {
   components:{
       routerlk,
       love
   },
   
   
}
</script>

<style scoped>

ul li{
    list-style: none;
}
/* .footer{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid blueviolet;
}
#imgs{
    width: 0.5rem;
    margin-left: 0.2rem;

}
.footer img:last-child{
    width: 0.3rem;
}
.right{
    float: right;
    width: 2rem;
    display: flex;
    justify-content: space-around;
}
.right a:nth-child(1){
    color: red;
}
.right a:nth-child(2){
    color: green;
}
.right a:nth-child(3){
    color: orangered;
}
.right a:nth-child(4){
    color: rgb(38, 0, 255);
} */
.mv{
   width: 3rem;
   margin: auto;
   height: 1.2rem;  
   padding-top: 0.8rem;
}
.uls li{
    float: left;
    width: 50%;
    padding: 0.05rem;
    box-sizing: border-box;
}
.uls li a{
    display: block;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background-color: #f6f6f6;
    color: #494949;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    font-size: 0.16rem;
}

</style>