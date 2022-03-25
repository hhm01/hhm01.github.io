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
      <el-row class="home_carousel">
        <el-col :span="2">
          <el-button class="select_button select_button_1" :style="'height: '+carousel_height+'px'" @click="arrow_click('left')">
          </el-button>
        </el-col>
        <el-col :span="20">
          <el-carousel ref="carousel_avg" arrow="never" indicator-position="none" :height="carousel_height+'px'" v-if="show === 'show_avg'">
            <el-carousel-item v-for="pic in screenshot_avg" :key="pic">
              <img ref="carousel_img" :src="pic.src" class="home_img_3" @load="img_load" @change="img_load">
            </el-carousel-item>
          </el-carousel>
          <el-carousel ref="carousel_rpg" arrow="never" indicator-position="none" :height="carousel_height+'px'" v-if="show === 'show_rpg'">
            <el-carousel-item v-for="pic in screenshot_rpg" :key="pic">
              <img ref="carousel_img" :src="pic.src" class="home_img_3">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="2">
          <el-button class="select_button" :style="'height: '+carousel_height+'px'" @click="arrow_click('right')">
          </el-button>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="page_home_footer" height="auto">
      <el-row class="auth_text">
        {{ authorization_text_1 }}
      </el-row>
      <el-row class="auth_text">
        链接：<a :href="authorization_text_2" target="_blank">{{ authorization_text_2 }}</a>
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
    },
    img_load () {
      this.$nextTick(() => {
        this.carousel_height = this.$refs.carousel_img && this.$refs.carousel_img ? this.$refs.carousel_img[0].height : ''
      })
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
      home_intro_text: '游戏简介：' +
        '「你」是提瓦特学院的三年级学生。在你平静的校园生活中，有性格迥异的友人、博学多识的教授，以及即将杀来的期末考—— \n' +
        ' 然而，一场突如其来的意外打碎了平和的假象。当你费尽心力解决完这些棘手的事件后，才发现这一切仅仅只是个开端…… ',
      authorization_text_1: '根据《原神》官方于2021.11.24官方社区米游社发布的《原神同人周边大陆地区正式运行指引v1.2》所言，所有非商用无盈利的同人产出官方都是持有支持态度，并且无需官方专程授权。',
      authorization_text_2: 'https://m.bbs.mihoyo.com/ys?channel=appstore/#/article/12304239',
      home_PV: require('./home/白情预热~1.mp4'),
      show: 'show_avg',
      carousel_height: '',
      screen_width: document.body.clientWidth,
      screenshot_avg: [
        {
          src: require('./home/img_avg_1.png')
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
          src: require('./home/img_rpg_1.png')
        },
        {
          src: require('./home/img_rpg_2.png')
        },
        {
          src: require('./home/img_rpg_3.png')
        },
        {
          src: require('./home/img_rpg_4.png')
        },
        {
          src: require('./home/img_rpg_5.png')
        }
      ]
    }
  },
  watch: {
    carousel_height: {
      immediate: true,
      handler: function (newVal) {
        console.log(newVal)
      }
    }
  },
  mounted () {
    const that = this
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
}

.intro_text {
  width: 80%;
  margin: auto;
  font-size: 2vw;
  color: #ffffff;
  font-family: '宋体';
}

.auth_text {
  width: 80%;
  font-size: 1vw;
  font-family: '宋体';
  color: #ffffff;
  margin: 20px auto;
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
  width: 80%;
  background-image: url("./home/btn_切换箭头.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  background-color: transparent;
  border: 0;
  padding: 0;
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
  width: 70%;
  margin: 20px auto 20px auto;
  background-image: url("./home/img_截图底图.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
