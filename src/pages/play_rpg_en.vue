<template>
  <el-container direction="vertical">
    <el-container class="page_play_rpg" direction="vertical">
      <el-row style="margin-top: 10vw; font-size: 4vw;">
        RPG游玩
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
    change_lang: function () {
      this.$router.push('/cn/' + this.page)
    }
  },
  data () {
    return {
      page: 'play_rpg'
    }
  }
}
</script>

<style>
.page_play_rpg {
  max-width: 1920px;
  margin: auto;
  min-height: 50vw;
}

</style>
