<template>
  <el-container class="whole_page">
    <el-main>
      <el-row>
        <video class="home_PV" controls>
          <source src="../assets/home_pv.mp4" type="video/mp4">
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
      <el-row>
        <div class="auth_text">
          {{ authorization_text }}
        </div>
      </el-row>
    </el-main>
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
      home_intro_text: '这是故事简介。',
      authorization_text: '这是授权信息。'
    }
  }
}
</script>

<style>
.whole_page {
  width: 30cm;
  text-align: center;
}

.home_PV {
  width: 100%;
}

.intro_text, .auth_text {
  min-height: 2cm;
  margin-top: 0.5cm;
  border: 1px solid;
}

.button_play {
  width: 5cm;
  margin: 0.5cm 0 0 0;
}

</style>
