<template>
 <div>
    <h1>科学研究</h1>
    <el-divider></el-divider>
    <el-card class="box-card-one">
        <img src="../../assets/img/research/research1.png" class="first">
        <img src="../../assets/img/research/research2.png" class="first">
    </el-card>
    <el-card class="box-card-two">
        <p style="line-height:30px">建园以来，申请科研项目十多项，其中国家自然基金项目6项，国家科技支撑计划项目2项，重点研发项目2项。目前，科教园正在进行的科研课题有：（1）崩岗侵蚀成因机理及防治研究；（2）茶果园生草效益及作用机制；（3）丘陵红壤侵蚀劣地生态恢复研究等。在《Soil Science Society of America Journal》，《CATENA》，《水土保持学报》，《土壤学报》等刊物上发表了100多篇学术论文；研究成果“侵蚀坡地果园生草的生态效益及对果树生长的影响”获得2007年度福建水利科学技术奖二等奖。出版专著3本，申请专利10多项。</p>
        
    </el-card>
</div>
</template>

<script>
export default {
 components:{},
 props:{},
 data(){
  return{
  };
}
}
</script>
<style lang="css" scoped>
body{
    background-color: white;
}
h1{
    margin-top: 40px;
    margin-left: 600px;
    font-size: 30px;
    color:#474747;
    font-weight: 800;
}
.box-card-one{
    margin-left:80px;
    height: 115vh;
    width: 60%;
    float: left;
    
    margin-bottom: 120px;
}
.box-card-two{
    margin-left: 20px;
    height: 450px;
    width: 30%;
    float: left;
    background: url("../../assets/img/box-card-two.jpg");
    background-color:white;
    opacity: 0.9;
}
p{
    margin-top: 40px;
}
.first{
    margin-bottom: 20px;
    margin-top: 0;
    margin-left: 32px;
}
</style>