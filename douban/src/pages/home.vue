             
        <template>
            <div>
              主页
              <!-- 3 使用 -->
              <router-link-nav></router-link-nav>
              <parent :parentprops="arr"></parent>
            </div>
        </template>
        
        <script>
        //1 引用
        import routerLinkNav from '../components/routerLinkNav'
        import parent from '../components/silder/parent'
        export default {
            //2 调用
            components:{
                routerLinkNav,
                parent
            },
            data(){
                return{
                    arr:[]
                }
            },
            created() {
                this.axios({
                    method:"get",
                    url:"http://localhost:3000/get"
                }).then((ok)=>{
                    console.log(ok.data.data);
                    this.arr=ok.data.data;
                })
            },
            computed: {
                arra(){
                    var cc=this.arr.filter((v,i)=>{
                        if(v.id<8){
                            return this.arr[i]
                        }
                    });
                    return cc
                },
                arrb(){
                  var cc=this.arr.filter((v,i)=>{
                        if(v.id>7){
                            return this.arr[i]
                        }
                    });
                    return cc
                }
        }
        }
        </script>   

        <style scoped>
            div{
                font-size:0.3rem;
            }
        </style>