
<template>
    <div>
        <div class="bbq">
                <span class="aps">影院热映</span>
                <a href="#" class="aaa">更多</a>
        </div>
        <div  class="silder">
             <smalls v-for="(v,i) in bigprops" :key="i" :zititle="v.title" :ziimgurl="v.images.small"></smalls>
            
        </div>
    </div>
</template>

<script>
import smalls from './smalls'
export default {
    components:{
        smalls
    },
    props:{
        bigprops:{
            type:Array,
            require:true
        }
    }
}
</script>

<style scoped>
.bbq{
    width: 3.3rem;
    margin: 0 auto;
}
.bbq span{
    font-size: 0.14rem;
    float: left;
}
.aaa{
    font-size: 0.14rem;
    float: right;
}
.silder{
    display: flex;
    overflow: auto;
    margin: 0.1rem;
    width: 3.5rem;
}
    
</style>