<template>
  <div id="app" class="whole_page">
    <el-row>
      <router-view></router-view>
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
      page: '',
      language: 'cn'
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
  background-image: url("./pages/menu/img_顶部栏底.png");
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
  background-image: url("./pages/menu/logo.png");
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
.home .btn_home,
.intro .btn_intro,
.work .btn_work,
.staff .btn_staff,
.QA .btn_QA,
.shop .btn_shop {
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

.btn_language {
  border: 0;
  width: 100%;
}

.btn_language:focus {
  text-shadow: none;
}

.btn_language:hover {
  text-shadow: 0 0 10px #ffff00;
}

</style>
