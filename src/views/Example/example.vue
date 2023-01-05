<template>
 <div>
    <h1>示范推广</h1>
    <el-divider></el-divider>
    <el-card class="box-card-one">
        <p style="line-height:20px">从1983年起，我校师生深入水土流失极其严重的长汀县和安溪县实地考察，对河田严重侵蚀区的侵蚀状况和机理做了较深入的调查和研究。2000年之后，我校继续积极参与长汀水土流失治理工作，每年选派一批师生到长汀开展土壤肥力恢复，崩岗治理等水土保持科技下乡服务。</p>
        <p style="line-height:20px">2012年，习近平同志对长汀的水土流失治理做了“进则全胜，不进则退”的指示。科教园积极参与学校助推全省新一轮水土流失治理工作，充分发挥自身优势，参与了长汀，安溪，连城等地的助推工作。</p>
    </el-card>
    <el-card class="box-card-two">
        <img src="../../assets/img/example/example1.png" class="first">
        <img src="../../assets/img/example/example2.png" style="margin-left:150px">
    </el-card>
    <el-card class="box-card-three">
        <img src="../../assets/img/example/example4.png">
    </el-card>
    <el-card class="box-card-four">
        <p style="line-height:20px">科教园已成为水土保持先进技术的孵化器和示范窗口。根据福建省坡地开发现状，科教园建立了坡地不同利用的示范区。在生产实际中，推广应用果园生草技术，并在实践中探索出了适合南方果园套种的牧草，入百喜草，平托花生，圆叶决明，黑麦草等。以金山科教园为中心辐射，带动全省水土保持科教园建设，参与培训人才，规划园区等工作，知道长汀，漳浦和集美等地的水土保持科教园建设，助推我省水土保持科教事业的发展</p>
    </el-card>
    <el-card class="box-card-five">
        <img src="../../assets/img/example/example5.png">
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
    height: 55vh;
    width: 30%;
    background: url("../../assets/img/box-card-two.jpg");
    float: left;
}
.box-card-two{
    margin-left: 20px;
    height: 115vh;
    width: 60%;
    float: left;
    background-color:white;
}
.box-card-three{
    margin-bottom: 20px;
    margin-top: 40px;
    float: left;
    margin-left: 80px;
}
.box-card-four{
    position: absolute;
    left: 80px;
    top:580px;
    height: 55vh;
    width: 400px;
    background: url("../../assets/img/box-card-two.jpg");
    float: left;
}
.box-card-five{
    margin-bottom: 20px;
    margin-top: 40px;
    float: left;
    margin-left: 20px;
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