<template>
  <el-container class="page_home" direction="vertical">
    <el-main class="page_home_header">
      <el-row style="height: 900px">
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-button class="play_button_1">

          </el-button>
        </el-col>
        <el-col :span="6">
          <el-button class="play_button_2">

          </el-button>
        </el-col>
      </el-row>
    </el-main>
    <el-main>
      <el-row>
        <img src="../assets/home/img_游戏PV.png">
      </el-row>
      <el-row>
        <img src="../assets/home/img_视频位置.png">
      </el-row>
      <el-row>
        <div class="intro_text">
          {{ home_intro_text }}
        </div>
      </el-row>
      <el-row style="margin-top: 100px; margin-bottom: 50px">
        <img src="../assets/home/img_实机展示.png">
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-button class="small_button_1">

          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button class="small_button_2">

          </el-button>
        </el-col>
      </el-row>
      <el-row class="screenshot_base" type="flex" justify="center" align="center">
        <el-col :span="2">
          <el-button class="select_button_1">
          </el-button>
        </el-col>
        <el-col :span="12">
          <img src="../assets/home/img_游戏截图.png">
        </el-col>
        <el-col :span="2">
          <el-button class="select_button_1">
          </el-button>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="page_home_footer" height="auto">
      <el-row class="auth_text">
        授权相关信息
      </el-row>
      <el-row class="auth_text">
        授权相关信息
      </el-row>
      <el-row class="auth_text">
        授权相关信息
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    play_avg () {
      this.show_alert()
    },
    play_rpg () {
      this.show_alert()
    },
    show_alert () {
      this.$message('还没写好这个功能')
    }
  },
  data () {
    return {
      home_intro_text: 'PV简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
      authorization_text: '这是授权信息。'
    }
  }
}
</script>

<style>
.page_home {
  background-image: url("../assets/home/img_底图拉伸自适应.png");
  background-size: 100%;
}

.page_home_header {
  background-image: url("../assets/home/img_封面图.png");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 1080px;
}

.page_home_footer {
  background-image: url("../assets/home/img_底部栏底.png");
  background-size: 100%;
}

.play_button_1 {
  background: url("../assets/home/btn_AVG游玩.png");
  background-size: 100%;
  width: 392px;
  height: 106px;
  border: 0;
}

.play_button_1:hover {
  background: url("../assets/home/btn_AVG游玩.png");
  background-size: 100%;
  width: 411px;
  height: 111px;
}

.play_button_2 {
  background: url("../assets/home/btn_RPG下载.png");
  background-size: 100%;
  width: 392px;
  height: 106px;
  border: 0;
}

.play_button_2:hover {
  background: url("../assets/home/btn_RPG下载.png");
  background-size: 100%;
  width: 411px;
  height: 111px;
}

.intro_text {
  width: 70%;
  margin: auto;
  margin-top: 50px;
  font-size: 26px;
  color: #ffffff;
  font-family: '宋体';
}

.auth_text {
  font-size: 26px;
  font-family: '宋体';
  color: #ffffff;
  margin: 20px 0;
}

.small_button_1 {
  height: 74px;
  width: 474px;
  background: url("../assets/home/img_AVG游戏.png");
  background-size: 100%;
  border: 0;
}

.small_button_1:hover, .small_button_1:active {
  height: 74px;
  width: 474px;
  background: url("../assets/home/btn_AVG游戏.png");
  background-size: 100%;
  border: 0;
}

.small_button_2 {
  height: 74px;
  width: 474px;
  background: url("../assets/home/img_RPG游戏.png");
  background-size: 100%;
  border: 0;
}

.small_button_2:hover, .small_button_2:active {
  height: 74px;
  width: 474px;
  background: url("../assets/home/btn_RPG游戏.png");
  background-size: 100%;
  border: 0;
}

.screenshot_base {
  background-image: url("../assets/home/img_截图底图.png");
  background-repeat: no-repeat;
  background-position: center top;
  height: 526px;
  margin-top: 50px;
  margin-bottom: 100px;
}

.select_button_1 {
  height: 540px;
  background: url("../assets/home/btn_切换箭头.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left;
  border: 0;
}

</style>
