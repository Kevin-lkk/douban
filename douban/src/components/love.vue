<template>
    <div>
        <img src="../../static/run.gif" v-if="obj.length<=0" class="bigimg">
        <div class="box" v-for="(v,i) in obj" :key="i">
            <div class="boxa">
                <h2>{{v.title}}</h2>
                <p>{{v.content}}</p>
                <span>{{v.category_name}}</span>
            </div>
            <div class="boxb">
                <a href="#"><img :src="v.image"></a>
                <span v-if="v.subcategory_name">本活动来自:{{v.subcategory_name}}</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    created(){
        setTimeout(()=>{
             this.axios({
           url:"/mm",
           method:"get"
       }).then((ok)=>{
           console.log(ok.data);
           this.obj=ok.data

       })

        },3000)
      
   },
    data(){
        return{
            obj:[]
        }
    }
}
</script>

<style scoped>
    .bigimg{
        margin: 0 auto;
        display: block;
    }
    .box{
        width:2.9rem;
        height: 1.5rem;
        /* background: skyblue; */
        margin: auto;
        display: flex;
        border-bottom: 1px solid orangered;
    }
    .boxa{
        width: 2rem;
        height: 1.5rem;
    }
    .boxa h2{
        font-size: 0.18rem;
        color: black;
        height: 0.5rem;
        width: 1.8rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .boxa p{
        font-size: 0.14rem;
        color: grey;
         height: 0.4rem;
         width: 1.8rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
     .boxa span{
        font-size: 0.12rem;
        color: grey;
        height: 0.2rem;
    }
    .boxb{
        width: 1rem;
        height: 1.5rem;
    }
    .boxb img{
        width: 1rem;
        height: 1rem;
        margin-top: 0.12rem;
    }
     .boxb span{
        font-size: 0.12rem;
        color: grey;
        float: right;
         width: 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>