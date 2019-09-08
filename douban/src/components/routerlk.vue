<template>
    <div class="footer">
        <a href="#"><img src="../../static/img/db.png" id="imgs"></a>
            <div class="right">
                <router-link to="/dianying">电影</router-link>
                <router-link to="/tushu">图书</router-link>
                <router-link to="/guangbo">光播</router-link>
                <router-link to="/xiaozu">小组</router-link>
                <router-link to="/sou"><img src="../../static/img/sx.png"></router-link>
            </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* html{
    font-size: 26.67vw;
} */
 .footer{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid blueviolet;
    position: fixed;
    top: 0px;
    background: white;
}
#imgs{
    width: 0.5rem;
    margin-left: 0.2rem;
    display: block;
    margin-top: 0.1rem;

}
.footer img:last-child{
    width: 0.3rem;
}
.right{
    float: right;
    width: 2rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.16rem;
    margin-top: -0.3rem;
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
}
</style>