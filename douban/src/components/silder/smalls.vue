<template>
   <div>
          <div class="bigstart">
             <div class="start">
                <a href="#"><img :src="ziimgurl"></a>
                <div>
                   <span class="apss">{{zititle}}</span>
                </div>
             </div>
           </div>
    </div>
</template>

<script>
export default {
    components:{

    },
    props:["zititle","ziimgurl"]                         
}
</script>

<style scoped>
div{
    font-size: 0.14rem;
}

.bigstart{
    width: 100%;
    /* margin: 0 auto; */
    height: 1.6rem; 
    /* background: skyblue; */
    /* margin:0 0.2rem; */

}

.start{
    width: 1rem; 
    height: 1.6rem;
    /* margin:.2rem; */
    margin-left: 0.1rem;
    
}
/* .sps{
    margin-top: 0.05rem;
    float: left;
}
.aaa{
    margin-top: 0.05rem;
    float: right;
} */

.start img{
    width: 1rem;
    height: 1.2rem;
    margin-left: 0px;
}
.apss{
    margin-bottom: 0.4rem;
    text-align: center;
    display: block;
}

</style>