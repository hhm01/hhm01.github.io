<template>
  <div id="app" class="whole_page">
    <el-row>
      <router-view></router-view>
    </el-row>
    <el-row class="header_page">
      <el-menu default-active="home" class="menu" :class="page" mode="horizontal" active-text-color="#ffffff" router="true" @select="select_page">
        <el-row class="header_menu">
          <el-col :span="5"><div class="contents_1 home_group_info"></div></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_home" index="home" route="/">首页</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_intro" index="intro" route="/intro">人物简介</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_work" index="work" route="/work">攻略集锦</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_staff" index="staff" route="/staff">STAFF</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_QA" index="QA" route="/QA">Q&A</el-menu-item></el-col>
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
  background-image: url("./pages/home/img_底图拉伸自适应.png");
  background-size: contain;
  background-repeat: repeat-y;
  text-align: center;
  width: 100%;
}

.header_page {
  background-image: url("./assets/menu/img_顶部栏底.png");
  background-size: contain;
  background-repeat: repeat-x;
  padding: 0!important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 5vw;
}

.home_group_info {
  background-image: url("./assets/menu/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 2vw;
  height: 3.5vw!important;
}

.contents, .contents_1 {
  margin: 0;
  background-color: transparent;
  color: #ffffff;
  font-size: 2vw;
  padding: 0;
  height: 5vw;
  line-height: 5vw;
  overflow: hidden;
}

.contents:hover, .contents:focus,
.QA .btn_QA,
.staff .btn_staff,
.work .btn_work,
.intro .btn_intro,
.home .btn_home {
  background-color: transparent;
  color: #ffffff!important;
  text-shadow: 0 0 10px #ffff00;
}

.menu {
  width: inherit;
  height: 100%;
  border-bottom: 0 !important;
  background: transparent;
}

.header_menu {
  height: 100%;
}

</style>
