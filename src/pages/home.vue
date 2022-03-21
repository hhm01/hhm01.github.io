<template>
  <el-container class="page_home" direction="vertical">
    <el-main class="page_home_header">
      <el-row type="flex" justify="center" class="play_button_row">
        <el-col :span="6">
          <el-button class="play_button_1" size="medium">

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
        <img src="./home/img_游戏PV.png" class="home_img_1">
      </el-row>
      <el-row>
        <img src="./home/img_视频位置.png" class="home_img_2">
      </el-row>
      <el-row>
        <div class="intro_text">
          {{ home_intro_text }}
        </div>
      </el-row>
      <el-row style="margin-top: 2%;">
        <img src="./home/img_实机展示.png" class="home_img_1">
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
          <el-button class="select_button select_button_1">
          </el-button>
        </el-col>
        <el-col :span="18">
          <img src="./home/img_游戏截图.png" class="home_img_3">
        </el-col>
        <el-col :span="2">
          <el-button class="select_button">
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

  },
  data () {
    return {
      home_intro_text: 'PV简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
      authorization_text: '这是授权信息。',
      pic_avg: {
        0: './home/img_游戏截图.png',
        1: './home/img_视频位置.png'
      }
    }
  }
}
</script>

<style>
.page_home {
  background-image: url("./home/img_底图拉伸自适应.png");
  background-size: contain;
  max-width: 1920px;
  margin: auto;
}

.el-button:focus {
  background-color: transparent;
}

.page_home_header {
  background-image: url("./home/img_封面图.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

.page_home_footer {
  background-image: url("./home/img_底部栏底.png");
  background-size: 100%;
}

.play_button_row {
  margin: 45% 0 1% 0;
}

.play_button_1 {
  background-image: url("./home/btn_AVG游玩.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  width: 80%;
  padding: 25% 0;
  border: 0;
}

.play_button_1:hover {
  background-color: transparent;
  width: 84%;
}

.play_button_2 {
  background-image: url("./home/btn_RPG下载.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  width: 80%;
  padding: 25% 0;
  border: 0;
}

.play_button_2:hover {
  background-color: transparent;
  width: 84%;
}

.home_img_1 {
  width: 40%;
  margin-bottom: 2%;
}

.home_img_2 {
  width: 60%;
  margin-bottom: 2%;
}

.home_img_3 {
  width: 100%;

}

.intro_text {
  width: 80%;
  margin: auto;
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
  width: 80%;
  padding-bottom: 15%;
  background-image: url("./home/img_AVG游戏.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: 0;
}

.small_button_1:hover, .small_button_1:active, .small_button_1:focus {
  background-image: url("./home/btn_AVG游戏.png");
  background-color: transparent;
  border: 0;
}

.small_button_2 {
  width: 80%;
  padding-bottom: 15%;
  background-image: url("./home/img_RPG游戏.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: 0;
}

.small_button_2:hover, .small_button_2:active, .small_button_2:focus {
  background-image: url("./home/btn_RPG游戏.png");
  background-color: transparent;
  border: 0;
}

.screenshot_base {
  background-image: url("./home/img_截图底图.png");
  background-size: 91%;
  background-repeat: no-repeat;
  background-position: center;
  width: 70%;
  margin: 2.5% auto 5% auto;
}

.select_button {
  margin: 180% 0;
  padding: 100% 0 50% 0;
  width: 80%;
  background-image: url("./home/btn_切换箭头.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left;
  background-color: transparent;
  border: 0;
}

.select_button:focus, .select_button:active {
  background-color: transparent;
}

.select_button:hover {
  width: 84%;
  background-color: transparent;
}

.select_button_1 {
  transform: rotate(180deg);
}

</style>
