<template>
 <div>
    <h1>基础设施--护坡措施</h1>
    <el-divider></el-divider>
    <el-card class="box-card-one">
        <img src="../../assets/img/facilitiesn/facilitiesn1.png">
        <img src="../../assets/img/facilitiesn/facilitiesn2.png" class="one">
        <img src="../../assets/img/facilitiesn/facilitiesn3.png" class="two">
        <img src="../../assets/img/facilitiesn/facilitiesn4.png" class="three">
    </el-card>
    <el-card class="box-card-two" style="height:300px">
        <h2>编栅护坡</h2>
        <p style="line-height:30px">用于表土较松，坡度较大的裸露坡面上。做法是：在坡面上每隔70cm设置一个20cm高德栅栏，用于拦截上坡径流泥沙，栅栏分两层，里层为无纺布，外层为塑料网格，栅栏用钢筋固定于坡面上。栅栏上方设一沟底宽20cm的排水沟，将径流排入排水总沟。在坡面上种植美化环境的植物。</p>
    </el-card>
    <el-card class="box-card-two">
        <h2>草皮护坡</h2>
        <p style="line-height:30px">将马尼拉或狗牙根等草皮铺植于斜坡上，并用牙签固定。</p>
    </el-card>
    <el-card class="box-card-two">
        <h2>废旧轮胎护坡</h2>
        <p style="line-height:30px">将轮胎埋入土中，并在其中种植绿化美化植物。适用于稳定且岩土裸露的边坡。</p>
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