<template>
 <div>
    <h1 style="clear:both">基础设施--科教楼</h1>
    <el-divider></el-divider>
    <el-card class="box-card-five" style="width:800px">
        <img src="../../assets/img/facilitiesn/facilitiesn10.png">
        <img src="../../assets/img/facilitiesn/facilitiesn11.png" style="margin-left:20px">
    </el-card>
    <el-card class="box-card-six" style="width:420px">
        <p style="line-height:30px">建筑面积630m²，包括视听教室，展览室和实验室。视听教室主要用于放映水土保持科普影片
            ；展览厅主要用于展示矿物，岩石，土壤标本，自然景观，水土流失状况和水土保持措施等实物，和图片等；实验室可完成
            径流泥沙样品处理，水样N/P测定，土壤剪切，土壤颗粒分析等试验。</p>
            <br>
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