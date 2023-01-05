<template>
 <div>
    <h2>领导关怀</h2>
    <el-divider></el-divider>
    <el-card class="box-card-three"> 
      <img src="../../assets/img/leader1.png">
      <img src="../../assets/img/leader2.png">
      <img src="../../assets/img/leader3.png">
    </el-card>
    <el-card class="box-card-four">
      <h1>领导关心</h1>
      <ul>
        <li><i>科教园建设得到了上级领导的重视和关心。中共中央书记处书记，中央统战部部长，福建省委原书记尤权，国家安全部部长，福建省委原副书记陈文清，水利部原部长陈雷等领导莅临科教园指导工作</i></li>
      </ul>
    </el-card>
    <el-card class="box-card-four-one">
      <h1>专家指导</h1>
      <ul>
        <li><i>科教园建设得到了国内外专家的指导。北京林业大学已故教授关君蔚院士，中国科学院水利部成都山地灾害与环境研究所催鹏院士，西北农林科技大学邵明安院士，台湾已故著名水土保持专家廖绵浚博士，美国国家土壤侵蚀研究实验室主任黄基华博士等专家和学者莅临科教园交流和指导</i></li>
      </ul>
    </el-card>
    <el-card class="box-card-four-two">
      <h1>同行交流</h1>
      <ul>
        <li><i>科教园接待了来自世界水土保持协会，美国，加拿大，瑞典，泰国和中科院南京土壤所，中科院水土保持研究所，北京，广东，宁夏，广西，江西，黑龙江，台湾以及本省等国内外专家同行</i></li>
      </ul>
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
h2{
    margin-top: 40px;
    margin-left: 600px;
    font-size: 30px;
    color:#474747;
    font-weight: 800;
}
li{
  margin-top: 30px;
}
i{
  color: #666;
}
 h1 {
  font-size: 20px;
  font-weight: 800;
}
 b{
  font-weight: 600;
}
.box-card-three{
  width:760px;
  height: 740px;
  margin-left: 80px;
  margin-top: 20px;
  float: left;
  margin-bottom: 40px;
}
.box-card-four{
  height: 200px;
  width: 400px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  float: left;
  background: url("../../assets/img/four-1.jpg");
}
.box-card-four i{
  color: white;
}
.box-card-four h1{
  color: white;
}
.box-card-four-one{
  height: 200px;
  width: 400px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  float: left;
  background: url("../../assets/img/four-2.jpg");
}
.box-card-four-one i{
  color: white;
}
.box-card-four-one h1{
  color: white;
}
.box-card-four-two{
  height: 200px;
  width: 400px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  float: left;
  background: url("../../assets/img/four-3.jpg");
}
.box-card-four-two i{
  color: white;
}
.box-card-four-two h1{
  color: white;
}
</style>