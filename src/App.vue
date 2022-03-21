<template>
  <div id="app" class="whole_page" direction="vertical">
    <el-row>
      <router-view></router-view>
    </el-row>
    <el-row class="header_page">
      <el-menu default-active="home" class="menu" :class="page" mode="horizontal" active-text-color="#ff0" router=true @select="select_page">
        <el-row class="header_menu">
          <el-col :span="5"><div class="contents_1 home_group_info" disabled="true">鸽已永治制作组</div></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_home" index="home" route="/"></el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_intro" index="intro" route="/intro"></el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_work" index="work" route="/work"></el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_staff" index="staff" route="/staff"></el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_QA" index="QA" route="/QA"></el-menu-item></el-col>
        </el-row>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    select_page (index) {
      this.page = index
    }
  },
  data () {
    return {
      page: 'home'
    }
  }
}

</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin: auto;
}

body {
  margin: 0;
}

.el-main {
  padding: 0;
}

.whole_page {
  background-image: url("./assets/menu/img_封面拉伸底图.png");
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  width: 100%;
}

.header_page {
  background-image: url("./assets/menu/img_顶部栏底.png");
  background-size: contain;
  padding: 0!important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  max-width: 1920px;
}

.home_group_info {
  height: 56px;
  line-height: 56px;
  font-size: 18pt;
  color: #ffffff;
  font-family: '宋体';
  white-space: nowrap;
  text-align: left;
  opacity: 0.8;
}

.btn_home {
  background-image: url("./assets/menu/btn_首页.png");
}

.btn_home:hover, .home .btn_home {
  background-image: url("./assets/menu/img_首页.png");
}

.btn_intro {
  background-image: url("./assets/menu/btn_人物简介.png");
}

.btn_intro:hover, .intro .btn_intro {
  background-image: url("./assets/menu/img_人物简介.png");
}

.btn_work {
  background-image: url("./assets/menu/btn_攻略集锦.png");
}

.btn_work:hover, .work .btn_work {
  background-image: url("./assets/menu/img_攻略集锦.png");
}

.btn_staff {
  background-image: url("./assets/menu/btn_staff.png");
}

.btn_staff:hover, .staff .btn_staff {
  background-image: url("./assets/menu/img_staff.png");
}

.btn_QA {
  background-image: url("./assets/menu/btn_qa.png");
}

.btn_QA:hover, .QA .btn_QA {
  background-image: url("./assets/menu/img_qa.png");
}

.contents, .contents_1 {
  margin: 1px 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.contents:hover, .contents:focus {
  background-color: transparent;
}

.contents_1 {
  padding: 0 20px;
}

.menu {
  width: inherit;
  border-bottom: 0 !important;
  background: transparent;
}

.button_small {
  width: 90%;
  font-size: 12pt;
  height: 1cm;
}

</style>
