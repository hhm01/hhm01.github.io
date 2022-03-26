<template>
  <el-container direction="vertical">
    <el-row>
      <img src="./home/img_封面图.jpg" class="base_img">
    </el-row>
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
        <el-row class="intro_text">
          <p>故事简介：</p>
          <p>「你」是提瓦特学院的三年级学生。在你平静的校园生活中，有性格迥异的友人、博学多识的教授，以及即将杀来的期末考——</p>
          <p>然而，一场突如其来的意外打碎了平和的假象。当你费尽心力解决完这些棘手的事件后，才发现这一切仅仅只是个开端……</p>
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
        <el-row class="home_carousel">
          <el-col :span="2">
            <el-button class="select_button select_button_1" @click="arrow_click('left')">
            </el-button>
          </el-col>
          <el-col :span="20">
            <el-carousel type="card" ref="carousel_avg" arrow="never" indicator-position="none" height="20.9vw" v-if="show === 'show_avg'">
              <el-carousel-item v-for="pic in screenshot_avg" :key="pic">
                <img ref="carousel_img" :src="pic.src" class="home_img_3" @load="img_load">
              </el-carousel-item>
            </el-carousel>
            <el-carousel type="card" ref="carousel_rpg" arrow="never" indicator-position="none" height="20.9vw" v-if="show === 'show_rpg'">
              <el-carousel-item v-for="pic in screenshot_rpg" :key="pic">
                <img ref="carousel_img_2" :src="pic.src" class="home_img_3" @load="img_load">
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="2">
            <el-button class="select_button" @click="arrow_click('right')">
            </el-button>
          </el-col>
        </el-row>
        <el-row>
          {{ carousel_height }}
        </el-row>
        <el-row>
          <p></p>
        </el-row>
      </el-main>
    </el-container>
    <el-container class="page_home_footer">
      <el-row class="auth_text">
        <p>本游戏为米哈游科技（上海）有限公司原创游戏《原神》的同人作品，所有人物归属米哈游科技（上海）有限公司。</p>
        <p>根据《原神》官方于2021.11.24官方社区米游社发布的<el-link :href="authorization_link" target="_blank" :underline="false" type="primary" style="font-size: inherit;">《原神同人周边大陆地区正式运行指引v1.2》</el-link>：</p>
        <p>所有非商用无盈利的同人产出官方都是持有支持态度，并且无需官方专程授权。</p>
      </el-row>
    </el-container>
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
    },
    arrow_click (val) {
      if (this.show === 'show_avg') {
        if (val === 'left') {
          this.$refs.carousel_avg.prev()
        } else {
          this.$refs.carousel_avg.next()
        }
      } else if (this.show === 'show_rpg') {
        if (val === 'left') {
          this.$refs.carousel_rpg.prev()
        } else {
          this.$refs.carousel_rpg.next()
        }
      }
    }
  },
  data () {
    return {
      authorization_link: 'https://m.bbs.mihoyo.com/ys?channel=appstore/#/article/12304239',
      home_PV: require('./home/白情预热~1.webm'),
      show: 'show_avg',
      screen_width: document.body.clientWidth,
      carousel_height: '',
      screenshot_avg: [
        {
          src: require('./home/img_avg_1.jpg')
        },
        {
          src: require('./home/img_avg_2.png')
        },
        {
          src: require('./home/img_avg_3.png')
        },
        {
          src: require('./home/img_avg_4.png')
        },
        {
          src: require('./home/img_avg_5.png')
        }
      ],
      screenshot_rpg: [
        {
          src: require('./home/img_rpg_1.jpg')
        },
        {
          src: require('./home/img_rpg_2.jpg')
        },
        {
          src: require('./home/img_rpg_3.jpg')
        },
        {
          src: require('./home/img_rpg_4.jpg')
        },
        {
          src: require('./home/img_rpg_5.jpg')
        }
      ]
    }
  },
  mounted () {
    const that = this
    that.img_load()
    window.onresize = function () {
      return (() => {
        that.img_load()
      })()
    }
  }
}
</script>

<style>
.page_home {
  background-size: contain;
  max-width: 1920px;
  margin: auto;
  z-index: 0;
}

.base_img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(50px);
}

.el-button:focus {
  background-color: transparent;
}

.page_home_header {
  background-image: url("home/img_封面图.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}

.page_home_footer {
  background-image: url("./home/img_底部栏底.png");
  background-size: contain;
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
}

.intro_text {
  width: 80%;
  margin: 1% auto;
  font-size: 1.2vw;
  color: #ffffff;
  font-family: "宋体";
  padding: 0;
}

.auth_text {
  width: 80%;
  font-size: 0.8vw;
  font-family: "宋体";
  color: #ffffff;
  margin: 1% auto;
  padding: 0;
}

.small_button_1 {
  width: 80%;
  padding-bottom: 15%;
  background-image: url("./home/btn_AVG游戏.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: 0;
}

.small_button_1:hover, .small_button_1:active, .small_button_1:focus, .show_avg .small_button_1 {
  background-image: url("./home/img_AVG游戏.png");
  background-color: transparent;
  border: 0;
}

.small_button_2 {
  width: 80%;
  padding-bottom: 15%;
  background-image: url("./home/btn_RPG游戏.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: 0;
}

.small_button_2:hover, .small_button_2:active, .small_button_2:focus, .show_rpg .small_button_2 {
  background-image: url("./home/img_RPG游戏.png");
  background-color: transparent;
  border: 0;
}

.screenshot_base {
  background-image: url("./home/img_截图底图.png");
  background-size: 91%;
  background-repeat: no-repeat;
  background-position: center;
  width: 90%;
}

.select_button {
  width: 80%;
  background-image: url("./home/btn_切换箭头.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  background-color: transparent;
  border: 0!important;
  padding: 0;
  margin: 0!important;
  height: 20.9vw;
  max-height: 405px;
}

.select_button:focus, .select_button:active {
  background-color: transparent;
}

.select_button:hover {
  width: 90%;
  background-color: transparent;
}

.select_button_1 {
  transform: rotate(180deg);
}

.home_carousel {
  width: 90%;
  margin: 2% auto 2% auto;
  background-image: url("./home/img_截图底图.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 20.9vw;
  max-height: 405px;
}

.home_carousel .el-carousel__container {
  max-height: 405px;
}

</style>
