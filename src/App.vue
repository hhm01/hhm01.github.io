<template>
  <el-container id="app" class="whole_page">
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-main class="header_page">
      <el-menu default-active="1" class="menu" mode="horizontal" active-text-color="#ff0" router=true>
        <el-row class="header_menu">
          <el-col :span="5"><div class="contents_1" style="text-align: left!important;">鸽已永治制作组</div></el-col>
          <el-col :span="3"><el-menu-item class="contents" index="home" route="/">首页</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents" index="intro" route="/intro">人物简介</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents" index="work" route="/work">攻略集锦</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents" index="staff" route="/staff">STAFF</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents" index="QA" route="/QA">Q&A</el-menu-item></el-col>
        </el-row>
      </el-menu>
    </el-main>
  </el-container>
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
  background-repeat: no-repeat;
  text-align: center;
  width: 1920px;
}

.header_page {
  background-image: url("./assets/menu/img_顶部栏底.png");
  background-size: contain;
  padding: 0!important;
  position: absolute;
  top: 0;
  margin: auto;
  width: 1920px;
}

.contents, .contents_1 {
  height: 2cm;
  line-height: 2cm !important;
  font-size: 18pt;
  color: #fff;
  margin: 1px 5px;
}

.contents_1 {
  padding: 0 20px;
}

.contents:focus, .contents:hover {
  color: #ff0!important;
  background-color: rgba(255, 255, 255, 0.4);
}

.submenu_title {
  font-size: 20pt;
  border-radius: 8px;
}

.sub_contents {
  font-size: 20pt;
  text-align: center;
}

.sub_contents:hover {
  background-color: #ecf5ff !important;
}

.menu {
  width: inherit;
  border-bottom: 0 !important;
  background: transparent;
}

.el-submenu__icon-arrow {
  display: none;
}

.el-submenu__title:hover {
  border-radius: 8px;
}

.button_small {
  width: 90%;
  font-size: 12pt;
  height: 1cm;
}

</style>
