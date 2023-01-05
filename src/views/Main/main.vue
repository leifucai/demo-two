<template>
  <div class="block">
    <el-carousel height="350px" style="margin:20px 80px" type="card" indicator-position="none">
      <el-carousel-item v-for="(item,index) in list" :key="index">
        <img :src="item.url" style="width:100%;height:100%">
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card-one"> </el-card>
    <el-card class="box-card-two">
      <h1>基本情况</h1>
      <ul>
        <li><b>建设时间:</b>&nbsp;<i>1999年</i></li>
        <li><b>建设单位:</b>&nbsp;<i>福建农林大学,</i>&nbsp;<i>福建省水利厅,</i>&nbsp;<i>福州市水利局,</i>&nbsp;<i>中华（台湾）水土保持学会</i></li>
        <li><b>建设目的:</b>&nbsp;<i>建成集人才培养，科学研究，示范推广和科普教育于一体的水土保持科教园地。</i></li>
        <li><b>园区组成:</b>&nbsp;<i>园区划分为科研试验，示范教学，推广应用，观光休闲四个功能区域，设核心区，森林水文观测站，植物园，示范茶园，菌草园，百竹园。</i></li>
        <li><b>地理位置:</b>&nbsp;<i>位于福建农林大学校内，紧邻福州三环路和国道316线，距福州市区约3km，离福银高速公路福州西出口约4km，交通优势十分突出。</i></li>
        <li><b>建设面积:</b>&nbsp;<i>34.0hm²</i></li>
      </ul>
    </el-card>
    
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list:[
        {url:require("../../assets/img/list/list1.jpg")},
        {url:require("../../assets/img/list/list2.jpg")},
        {url:require("../../assets/img/list/list3.jpg")},
      ]
    };
  },
};
</script>

<style lang="css" scoped>
li{
  margin-top: 30px;
}
i{
  color: #666;
}
.box-card-one {
  width: 480px;
  height: 400px;
  margin-left: 80px;
  margin-top: 20px;
  background: url("../../assets/img/position.png");
  float: left;
}
.box-card-two {
  width: 680px;
  height: 400px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
  background: url("../../assets/img/box-card-two.jpg");
}
 h1 {
  font-size: 20px;
  font-weight: 800;
}
 b{
  font-weight: 600;
}
.block {
  height: 900px;
}
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>