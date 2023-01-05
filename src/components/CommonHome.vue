<template>
 <el-container>
  <el-header><common-header></common-header></el-header>
  <el-main><router-view></router-view></el-main>
  <!-- <el-footer><common-footer></common-footer></el-footer> -->
</el-container>
</template>

<script>
import CommonHeader from './CommonHeader.vue'
import CommonFooter from './CommonFooter.vue'
export default {
 components:{CommonHeader,CommonFooter},
 props:{},
 data(){
  return{
  };
}
}
</script>
<style lang="css" scoped>
.el-header{
  margin: 0;
  padding: 0;
}
.el-main{
  padding: 0;
  background-color: white;
  background: url("../assets/img/background.jpg" ) ;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}
.el-footer{
  padding: 0;
}
</style>