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
    <el-menu default-active="1" class="menu" mode="horizontal" router=true active-text-color="#f00">
      <el-row>
        <el-col :span="4"><el-menu-item class="contents" index="1" route="/">首页</el-menu-item></el-col>
        <el-col :span="4"><el-menu-item class="contents" index="2" route="/intro">人物简介</el-menu-item></el-col>
        <el-col :span="4"><el-menu-item class="contents" index="3" route="/demo">实机演示</el-menu-item></el-col>
        <el-col :span="4"><el-menu-item class="contents" index="4" route="/work">攻略集锦</el-menu-item></el-col>
        <el-col :span="4"><el-menu-item class="contents" index="5" route="/staff">STAFF</el-menu-item></el-col>
        <el-col :span="4"><el-menu-item class="contents" index="6" route="/QA">Q&A</el-menu-item></el-col>
      </el-row>
    </el-menu>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  methods: {
    change_language () {
      this.show_alert()
    },
    play_music () {
      this.show_alert()
    },
    show_alert () {
      this.$message('还没写好这个功能')
    }
  },
  data () {
    return {
      language: 'cn',
      active_index: '1'
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
  margin: 0 5px;
}

.menu {
  width: 100%;
}

.button_small {
  width: 90%;
  font-size: 12pt;
  height: 1cm;
}

</style>
