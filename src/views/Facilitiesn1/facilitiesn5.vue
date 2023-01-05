<template>
 <div>
    <h1 style="clear:both">基础设施--自我修复区</h1>
    <el-divider></el-divider>
    <el-card class="box-card-one" style="height:800px">
        <img src="../../assets/img/facilitiesn/facilitiesn13.png" style="margin-left:120px">
        <img src="../../assets/img/facilitiesn/facilitiesn14.png">
    </el-card>
    <el-card class="box-card-two" style="height:300px">
        <p style="line-height:30px">小区面积300m²，建园时采取人工剥蚀的办法来模拟剧烈侵蚀地，建成后全部封禁，通过自然
            恢复小区植被。用于观测剧烈腐蚀地的地表植被和土壤肥力的自然恢复过程。2013年5月调查，共有植物种类39类，其中
            ，地衣：1种；蕨类：3科3属3种；裸子植物：1科1属1种；被子植物：23科32属34种。</p>
    </el-card>
     <el-card class="box-card-three">
        <h2 style="color:rgb(240, 169, 16)">中华名特优植物园</h2>
        <p style="line-height:30px">模拟中国及其34个省区的行政地图建园，每个省区园分别种植该省具有的名特优植物。</p>
        <h2 style="color:rgb(240, 169, 16)">百竹园</h2>
        <p style="line-height:30px">竹类科研教学，竹子生产推广，旅游观光，交流示范的综合性基地。</p>
        <h2 style="color:rgb(240, 169, 16)">森林水文观测站</h2>
        <p style="line-height:30px">可以观测植被对截留降水，土壤蓄水，调节径流的影响。</p>
        <h2 style="color:rgb(240, 169, 16)">植物园</h2>
        <p style="line-height:30px">拥有丰富的亚热带树种可供观赏。</p>
        <h2 style="color:rgb(240, 169, 16)">菌草园</h2>
        <p style="line-height:30px">优质菌草品种选育和菌草种资源质保护的重要基地。</p>
        <h2 style="color:rgb(240, 169, 16)">示范茶园</h2>
        <p style="line-height:30px">楼层等高，环山水平，梯面外高里低，外埂内沟。</p>
    </el-card>
    <el-card class="box-card-four">
        <img src="../../assets/img/facilitiesn/facilitiesn15.png">
        <img src="../../assets/img/facilitiesn/facilitiesn16.png">
        <img src="../../assets/img/facilitiesn/facilitiesn17.png">
        <img src="../../assets/img/facilitiesn/facilitiesn18.png">
        <img src="../../assets/img/facilitiesn/facilitiesn19.png">
        <img src="../../assets/img/facilitiesn/facilitiesn20.png">
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
.box-card-three p{
    margin-top: 20px;
}
.box-card-two p{
    margin-top: 10px;
}
h2{
    margin-top: 20px;
    font-weight: 800;
    font-size: 20px;
}
h1{
    margin-top: 40px;
    margin-left: 560px;
    font-size: 30px;
    color:#474747;
    font-weight: 800;
}
.box-card-one{
    margin-bottom: 10px;
    height: 650px;
    width: 60%;
    margin-left:80px;
    float: left;
}
.box-card-two{
    margin-bottom: 15px;
    margin-left: 20px;
    height: 160px;
    width: 31%;
    float: left;
    background: url("../../assets/img/box-card-two.jpg");
    background-color:white;
    opacity: 0.9;
}
.box-card-three{
    margin-bottom: 40px;
    width: 500px;
    float: left;
    margin-left: 80px;
    background: url("../../assets/img/box-card-two.jpg");
    opacity: 0.9;
}
.box-card-four{
    margin-bottom: 40px;
    width: 700px;
    float: left;
    margin-left: 40px;
}
.box-card-five{
    margin-bottom: 40px;
    float: left;
    margin-left: 80px;
}
.box-card-six{
    margin-bottom: 280px;
    margin-left: 20px;
    width: 380px;
    float: left;
    background: url("../../assets/img/box-card-two.jpg");
    background-color:white;
    opacity: 0.9;
}
.box-card-seven{
    width: 500px;
    margin-bottom: 40px;
    float: left;
    margin-left: 80px;
    background: url("../../assets/img/box-card-two.jpg");
    opacity: 0.9;
}
p{
    margin-top: 40px;
}
.one{
    left: 550px;
    position: absolute;
}
.two{
    top: 400px;
    left: 550px;
    position: absolute;
}
</style>