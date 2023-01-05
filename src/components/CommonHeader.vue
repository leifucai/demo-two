<template>
 <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="rgb(159, 211, 253)"
  text-color="#474747"
  active-text-color="#ffd04b">
  <div class="logo"></div>
  <h2>绿水青山就是金山银山</h2>
  <el-menu-item class="first" @click="main">首页</el-menu-item>
  <el-menu-item @click="personnel">人才培养</el-menu-item>
  <el-submenu style="font-weight: 600;">
    <template slot="title">基础设施</template>
    <el-menu-item @click="facilitiesn">护坡措施</el-menu-item>
    <el-menu-item @click="facilitiesn1">径流小区</el-menu-item>
    <el-menu-item @click="facilitiesn2">山边沟</el-menu-item>
    <el-menu-item @click="facilitiesn3">科教楼</el-menu-item>
    <el-menu-item @click="facilitiesn4">实验设备</el-menu-item>
    <el-menu-item @click="facilitiesn5">自我修复区</el-menu-item>
  </el-submenu>
  <el-menu-item @click="research">科学研究</el-menu-item>
  <el-menu-item @click="example">示范推广</el-menu-item>
  <el-menu-item @click="education">科普教育</el-menu-item>

    

    <el-submenu style="font-weight: 600;">
    <template slot="title">社会关注</template>
    <el-menu-item @click="media">媒体关注</el-menu-item>
    <el-menu-item @click="leader">领导关怀</el-menu-item>
  </el-submenu>


</el-menu>
</template>

<script>
export default {
 components:{},
 props:{},
 data(){
  return{
  };
},
methods:{
    main(){
        this.$router.push('/main')
    },
    personnel(){
        this.$router.push('/personnel')
    },
    research(){
        this.$router.push('/research')
    },
    example(){
        this.$router.push('/example')
    },
    education(){
        this.$router.push('/education')
    },
    facilitiesn(){
        this.$router.push('/facilitiesn')
    },
    media(){
        this.$router.push('/media')
    },
    leader(){
        this.$router.push('/leader')
    },
    facilitiesn1(){
        this.$router.push('/facilitiesn1')
    },
    facilitiesn2(){
        this.$router.push('/facilitiesn2')
    },
    facilitiesn3(){
        this.$router.push('/facilitiesn3')
    },
    facilitiesn4(){
        this.$router.push('/facilitiesn4')
    },
    facilitiesn5(){
        this.$router.push('/facilitiesn5')
    },
}
}
</script>
<style lang="css" scoped>
.logo{
    background: url("../assets/img/logo1.png");
    height:60px;width:60px ; float:left ; margin-left:80px ;
    /* background-color: black; */
    background-size: cover;
}
.el-menu-demo{
    height: 61px;
    width: 100%;
}
.el-menu .el-menu-item{
    font-size: 14px;
    font-weight:600;
    line-height: 60px;
    height: 60px;
}
.el-menu .first{
    margin-left: 50px;
}
h2{
    float: left;
    line-height: 60px;
    margin-left: 10px;
    color:green;
    font-size: 20px;
}
</style>