<template>
  <el-container id="app" class="whole_page">
    <el-header style="text-align: right" height="1.5cm">
      <el-row>
        <el-col :span="3" :offset="18">
          <el-button class="button_small" @click="change_language">
            中英文切换
          </el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="button_small" @click="play_music">
            播放音乐
          </el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-header class="page">
      <el-row class="content_list row_layout" :class="active" @click.prevent>
        <el-col :span="4">
          <a href="#" class="contents home" @click="makeActive('home')">{{ contents.home }}</a>
        </el-col>
        <el-col :span="4">
          <a href="#" class="contents intro" @click="makeActive('intro')">{{ contents.intro }}</a>
        </el-col>
        <el-col :span="4">
          <a href="#" class="contents demo" @click="makeActive('demo')">{{ contents.demo }}</a>
        </el-col>
        <el-col :span="4">
          <a href="#" class="contents work" @click="makeActive('work')">{{ contents.work }}</a>
        </el-col>
        <el-col :span="4">
          <a href="#" class="contents staff" @click="makeActive('staff')">{{ contents.staff }}</a>
        </el-col>
        <el-col :span="4">
          <a href="#" class="contents QA" @click="makeActive('QA')">{{ contents.QA }}</a>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="page" v-if="active === 'home'">
      <el-row>
        <video class="home_PV" controls>
          <source src="./assets/home_pv.mp4" type="video/mp4">
        </video>
      </el-row>
      <el-row>
        <div class="intro_text">
          {{ home_intro_text }}
        </div>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-button type="success" @click="play_avg" class="button_play">
            AVG游玩
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="success" @click="play_rpg" class="button_play">
            RPG下载
          </el-button>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="page">
      <div class="auth_text">
        {{ authorization_text }}
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    change_language () {
      this.show_alert()
    },
    play_music () {
      this.show_alert()
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
      language: 'cn',
      active: 'home',
      home_intro_text: '这是故事简介。',
      contents: {
        home: '首页',
        intro: '人物简介',
        demo: '实机演示',
        work: '攻略集锦',
        staff: 'STAFF',
        QA: 'Q&A'
      },
      authorization_text: '这是授权信息。'
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

.whole_page {
  width: 30cm;
  text-align: center;
}

.contents {
  height: 1.5cm;
  font-size: 20pt;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3dce6;
  border-radius: 4px;
  color:#000;
  text-decoration:none;
  margin: 0 5px;
}

.content_list {
  margin: 0;
}

.content_list.home .home,
.content_list.intro .intro,
.content_list.demo .demo,
.content_list.work .work,
.content_list.staff .staff,
.content_list.QA .QA {
  background-color:#e35885;
}

.page {
  text-align: center;
  margin: 0;
  width: 30cm;
}

.home_PV {
  width: 100%;
}

.intro_text {
  min-height: 2cm;
  margin-top: 0.5cm;
  border: 1px solid;
}

.button_play {
  width: 5cm;
  margin: 0.5cm 0 0 0;
}

.auth_text {
  height: 90%;
  border: 1px solid;
}

.button_small {
  width: 90%;
  font-size: 12pt;
  height: 1cm;
}

</style>
