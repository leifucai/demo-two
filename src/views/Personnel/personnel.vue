<template>
 <div>
    <h1>人才培养</h1>
    <el-divider></el-divider>
    <el-card class="box-card-one">
        <p style="line-height:20px">拥有从本科，硕士，博士，博士后的完整人才培养体系。已培养博士研究所5名，硕士研究所60多名，本科生100多名</p>
        <p style="line-height:20px">科教园为福建农林大学九个专业（农业资源与环境，环境工程，林学，水土保持与荒漠化治理，园林，园艺，土地资源管理，茶学，农学）学生提供实践活动实习基地；还作为福建师范大学地理学院大学生课外实践基地。目前每年接待大学生人数近3000人。</p>
        <p style="line-height:20px">科教园为闽台科技合作交流提供了良好的合作平台。科教园参与题为《开展两岸交流，发挥双方优势，培养中华名族水平农科人才》科学成果获得国家教学成果二等奖，省教学成果一等奖；《以实践促成长，培养高水平水土保持人才》教学成果获得省教学成果奖二等奖</p>
    </el-card>
    <el-card class="box-card-two">
        <img src="../../assets/img/personnel/class.png" class="first">
        <img src="../../assets/img/personnel/personnel2.png">
    </el-card>
    <el-card class="box-card-three">

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
h1{
    margin-top: 40px;
    margin-left: 600px;
    font-size: 30px;
    color:#474747;
    font-weight: 800;
}
.box-card-one{
    margin-left:80px;
    /* height: 80vh; */
    width: 30%;
    background: url("../../assets/img/box-card-two.jpg");
    float: left;
    opacity: 0.9;
}
.box-card-two{
    margin-bottom: 120px;
    margin-left: 20px;
    /* height: 105vh; */
    width: 60%;
    float: left;
    background-color: white;
}
.box-card-three{
    left: 80px;
    top: 650px;
    position: absolute;
    width: 30%;
    height: 270px;
    background: url("../../assets/img/personnel/personnel1.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
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