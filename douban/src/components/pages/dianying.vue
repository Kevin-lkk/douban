<template>
    <div>
         <routerlk></routerlk>
         <div class="bbs">
             <big :bigprops="arr2"></big>
             <big :bigprops="arr3"></big>
             <big :bigprops="arr4"></big>
         </div>
    </div>
</template>

<script>
import routerlk from '.././routerlk'
import big from '../silder/big'

export default {
    components:{
        routerlk,
        big
    },
    data(){
        return{
            arr:[],
            arr2:[],
            arr3:[],
            arr4:[]
        }
    },
    created() {
        this.axios({
             url:"/gege",
           method:"get"
        }).then((ok)=>{
            console.log(ok);
            this.arr=ok.data
            this.arr2=this.arr.filter((v,i)=>{
                if(i<10){
                    return v
                }
               
            }),
            this.arr3=this.arr.filter((v,i)=>{
                if(i>=10&&i<20){
                    return v
                }
               
            }),
            this.arr4=this.arr.filter((v,i)=>{
                if(i>=20&&i<30){
                    return v
                }
            })
        })
    }
    
}
</script>

<style scoped>

/* .start{
    width: 3rem;
    margin: auto;
    height: 1.6rem;  
    padding-top: 0.2rem;
    background: skyblue;
}
     */
     .bbs{
         margin-top: 0.5rem;
     }
</style>