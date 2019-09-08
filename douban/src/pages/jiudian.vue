
        <template>
            <div>
                酒店
                <button class="btn btn-primary">好几家军军</button>
                <goback></goback>
                <button @click="fun()">点我 使用axios请求</button>
                <table>
                   <tr v-for="(v,i) in arr" :key="i">
                       <td>{{v.commentTxt}}</td>
                        <td>{{v.createAt}}</td>
                        <td>{{v.goodTimes}}</td>
                   </tr>
                </table>
            </div>
        </template>
        <script>
                 

                 $(document).ready(function(){
                     alert("你好么么哒")
                 })



        import goback from '../components/goback'
        export default {
            components:{
                goback
            },
            //将数据展示在页面中
            data(){
                return{
                    arr:[]
                }
            },
            methods:{
                fun(){
                    //axios进行数据请求
                    // this.axios({
                    //     method:"get",
                    //     url:"http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96bae3113&topicId=62187"
                    // }).then((data)=>{
                    //     console.log(data.data.data.commentList);
                    //     this.arr=data.data.data.commentList;
                    // })
                    this.axios({
                        method:"get",
                        url:"/mm"
                    }).then((data)=>{
                        console.log(data);
                       
                    })


                }
                
            }
        }
        </script>

        <style scoped>
        @import 'bootstrap/dist/css/bootstrap.min.css';
            
        </style>