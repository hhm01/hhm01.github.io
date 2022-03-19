<template>
  <el-container class="whole_page">
    <el-main>
      <el-tabs tab-position="left" class="character_tab">
        <el-tab-pane>
        <span slot="label">
          <el-button>角色1</el-button>
        </span>
          <el-container class="character_page">
            <el-aside width="10cm"><img src="../assets/logo.png"></el-aside>
            <el-container direction="vertical">
              <el-main>像素小人</el-main>
              <el-main>联动角色</el-main>
              <el-main>角色简介</el-main>
            </el-container>
          </el-container>
        </el-tab-pane>
        <el-tab-pane>
        <span slot="label">
          <el-button>角色213542</el-button>
        </span>
          <el-container class="character_page">
            <el-aside width="10cm"><img src="../assets/logo.png"><img src="../assets/logo.png"></el-aside>
            <el-container direction="vertical">
              <el-main>像素小人</el-main>
              <el-main>联动角色</el-main>
              <el-main>角色简介</el-main>
            </el-container>
          </el-container>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>
.whole_page {
  width: 30cm;
  text-align: center;
}

.character_page {
  height: 20cm;
}

</style>
