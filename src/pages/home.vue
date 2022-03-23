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
        <video controls class="home_PV">
          <source :src="home_PV" type="video/mp4">
        </video>
      </el-row>
      <el-row>
        <div class="intro_text">
          {{ home_intro_text }}
        </div>
      </el-row>
      <el-row style="margin-top: 2%;">
        <img src="./home/img_实机展示.png" class="home_img_1">
      </el-row>
      <el-row type="flex" justify="center" :class="show">
        <el-col :span="8">
          <el-button class="small_button_1" @click="show_avg_pic">

          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button class="small_button_2" @click="show_rpg_pic">

          </el-button>
        </el-col>
      </el-row>
      <el-row class="screenshot_base" type="flex" justify="center" align="center" :class="show" style="display: none">
        <el-col :span="2">
          <el-button class="select_button select_button_1">
          </el-button>
        </el-col>
        <el-col :span="18">
          <img :src="pic_rpg" class="home_img_3">
        </el-col>
        <el-col :span="2">
          <el-button class="select_button">
          </el-button>
        </el-col>
      </el-row>
      <el-row style="width: 70%; margin: auto;">
        <el-carousel autoplay="false" arrow="never" indicator-position="none" height="20vw" v-if="show === 'show_avg'">
          <el-carousel-item v-for="pic in screenshot_avg" :key="pic">
            <img :src="pic.src" class="home_img_3">
          </el-carousel-item>
        </el-carousel>
        <el-carousel type="card" interval="5000" height="20vw" v-if="show === 'show_rpg'">
          <el-carousel-item v-for="pic in screenshot_rpg" :key="pic">
            <img :src="pic.src" class="home_img_3">
          </el-carousel-item>
        </el-carousel>
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
    show_avg_pic: function () {
      this.show = 'show_avg'
    },
    show_rpg_pic: function () {
      this.show = 'show_rpg'
    }
  },
  data () {
    return {
      home_intro_text: '游戏简介：' +
        '「你」是提瓦特学院的三年级学生。在你平静的校园生活中，有性格迥异的友人、博学多识的教授，以及即将杀来的期末考—— \n' +
        ' 然而，一场突如其来的意外打碎了平和的假象。当你费尽心力解决完这些棘手的事件后，才发现这一切仅仅只是个开端…… ',
      authorization_text: '这是授权信息。',
      home_PV: require('./home/白情预热~1.mp4'),
      show: 'show_avg',
      screenshot_avg: [
        {
          src: require('./home/img_avg_1.jpg')
        },
        {
          src: require('./home/img_avg_2.jpg')
        },
        {
          src: require('./home/img_avg_3.jpg')
        },
        {
          src: require('./home/img_avg_4.jpg')
        },
        {
          src: require('./home/img_avg_5.jpg')
        }
      ],
      screenshot_rpg: [
        {
          src: require('./home/img_游戏截图.png')
        },
        {
          src: require('./home/img_avg_6.jpg')
        },
        {
          src: require('./home/img_avg_7.jpg')
        }
      ]
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

.home_PV {
  width: 60%;
  margin-bottom: 2%;
}

.home_img_3 {
  width: 100%;
  height: 100%;
}

.intro_text {
  width: 80%;
  margin: auto;
  font-size: 2rem;
  color: #ffffff;
  font-family: '宋体';
}

.auth_text {
  font-size: 2rem;
  font-family: '宋体';
  color: #ffffff;
  margin: 20px 0;
  padding: 0;
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

.small_button_1:hover, .small_button_1:active, .small_button_1:focus, .show_avg .small_button_1 {
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

.small_button_2:hover, .small_button_2:active, .small_button_2:focus, .show_rpg .small_button_2 {
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
}

.el-carousel__container {

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
