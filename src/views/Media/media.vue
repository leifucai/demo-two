<template>
 <div>
    <h1>媒体关注</h1>
    <el-divider></el-divider>
    <el-card class="box-card-one">
        <img src="../../assets/img/media/media1.png" class="first">
        <img src="../../assets/img/media/media2.png" class="first">
        <img src="../../assets/img/media/media3.png" class="first">
        <img src="../../assets/img/media/media4.png" class="second">
    </el-card>
    <el-card class="box-card-two">
        <p style="line-height:30px">科教园引起了媒体的关注，中央电视台，光明日报，福建日报，中国绿色时报，福建电视台综合频道，东南网，福州晚报等国家和地方媒体均对科教园的情况做了报道。</p>
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
    height: 800px;
    width: 60%;
    margin-left:80px;
    float: left;
}
.box-card-two{
    margin-left: 20px;
    height: 230px;
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
    float: left;
}
.second{
    position: absolute;
    top: 650px;
    left: 100px;
}
</style>