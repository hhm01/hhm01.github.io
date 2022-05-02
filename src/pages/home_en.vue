<template>
  <el-container direction="vertical">
    <el-row>
      <img src="./home/img_封面图.jpg" class="base_img">
    </el-row>
    <el-container class="page_home" direction="vertical">
      <el-main class="page_home_header">
        <el-row type="flex" justify="center" class="play_button_row">
          <el-col :span="6">
            <el-button class="play_button_1" @click="play_avg">

            </el-button>
          </el-col>
          <el-col :span="6">
            <el-button class="play_button_2" @click="play_rpg">

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
          <p>{{ intro_text_1 }}</p>
          <p>{{ intro_text_2 }}</p>
          <p>{{ intro_text_3 }}</p>
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
        <el-row class="home_carousel">
          <el-col :span="2">
            <el-button class="select_button select_button_1" @click="arrow_click('left')">
            </el-button>
          </el-col>
          <el-col :span="20">
            <el-carousel type="card" ref="carousel_avg" arrow="never" indicator-position="none" height="20.9vw" v-if="show === 'show_avg'">
              <el-carousel-item v-for="pic in screenshot_avg" :key="pic">
                <img ref="carousel_img" :src="pic.src" class="home_img_3">
              </el-carousel-item>
            </el-carousel>
            <el-carousel type="card" ref="carousel_rpg" arrow="never" indicator-position="none" height="20.9vw" v-if="show === 'show_rpg'">
              <el-carousel-item v-for="pic in screenshot_rpg" :key="pic">
                <img ref="carousel_img_2" :src="pic.src" class="home_img_3">
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
    <el-row class="header_page">
      <el-menu default-active="home" class="menu" :class="page" mode="horizontal" active-text-color="#ffffff" router="true" @select="select_page">
        <el-row class="header_menu">
          <el-col :span="4"><div class="contents_1 home_group_info"></div></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_home" index="home" route="/en/home">Home</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_intro" index="intro" route="/en/intro">Intro</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_work" index="work" route="/en/work">Work</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_staff" index="staff" route="/en/staff">STAFF</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_QA" index="QA" route="/en/QA">Q&A</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_shop" index="shop" route="/en/shop">Shop</el-menu-item></el-col>
          <el-col :span="2"><el-button class="contents btn_language" @select="change_lang" @click="change_lang">English</el-button></el-col>
        </el-row>
      </el-menu>
    </el-row>
  </el-container>
</template>

<script>
export default {
  methods: {
    play_avg: function () {
      this.$router.push('/en/play_avg')
    },
    play_rpg: function () {
      this.$router.push('/en/play_rpg')
    },
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
    },
    change_lang: function () {
      this.$router.push('/cn/' + this.page)
    }
  },
  data () {
    return {
      page: 'home',
      authorization_link: 'https://m.bbs.mihoyo.com/ys?channel=appstore/#/article/12304239',
      home_PV: require('./home/白情预热~1.webm'),
      show: 'show_avg',
      screen_width: document.body.clientWidth,
      intro_text_1: 'Story Introduction：',
      intro_text_2: '「You」 are a third year student at Tivat College. In your peaceful campus life, there are friends with different personalities, knowledgeable professors, and the coming final exams——',
      intro_text_3: 'However, a sudden accident shattered the illusion of peace. It\'s only the beginning when you\'ve worked your way out of these thorny incidents ...',
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
  margin: 46% 0 0 0;
  height: 12.5vw;
  max-height: 240px;
}

.play_button_1 {
  background-image: url("./home/btn_AVG游玩.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  width: 80%;
  height: 6vw;
  max-height: 115px;
  border: 0;
}

.play_button_1:hover {
  background-color: transparent;
  width: 84%;
  height: 6.3vw;
  max-height: 121px;
}

.play_button_2 {
  background-image: url("./home/btn_RPG下载.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  width: 80%;
  height: 6vw;
  max-height: 115px;
  border: 0;
}

.play_button_2:hover {
  background-color: transparent;
  width: 84%;
  height: 6.3vw;
  max-height: 121px;
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
  font-family: "Times New Roman";
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
