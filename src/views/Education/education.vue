<template>
 <div>
    <h1>科普教育</h1>
    <el-divider></el-divider>
    <el-card class="box-card-one">
        <img src="../../assets/img/education/education1.png" class="first">
        <img src="../../assets/img/education/education2.png" class="first">
        <img src="../../assets/img/education/education3.png">
    </el-card>
    <el-card class="box-card-two">
        <p style="line-height:30px">面向中小学生开展水土保持知识宣传教育活动。根据学生不同年龄阶段特征，编制了不同的水土保持教育活动方案。针对小学生，以直观演示，图片介绍为主，并把游戏融合到活动中，入园区的定向运动，增加了活动的趣味性；针对中学生，出了展示以外，还增加了实践动手环节，如不同质地类型土壤的简易判断，融知识性和实践性为一体。目前园区每年对外开放超过200个工作日，每年接待中小学生人数超2000人。如组织福州三中实验班来园区开展夏令营活动，开展福建省中学地理教学研究会交流活动等。</p>
        
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
    margin-bottom: 120px;
    margin-left:80px;
    height: 100vh;
    width: 60%;
    float: left;
}
.box-card-two{
    margin-left: 20px;
    height: 450px;
    width: 30%;
    float: left;
    background-color:white;
    background: url("../../assets/img/box-card-two.jpg");
    opacity: 0.9;
}
p{
    margin-top: 40px;
}
.first{
    margin-bottom: 40px;
    margin-top: 0;
    margin-left: 40px;
}
</style>