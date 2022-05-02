<template>
  <el-container direction="vertical">
    <el-container class="page_shop" direction="vertical">

    </el-container>
    <el-row class="header_page">
      <el-menu class="menu" :class="page" mode="horizontal" active-text-color="#ffffff" router="true" @select="select_page">
        <el-row class="header_menu">
          <el-col :span="4"><div class="contents_1 home_group_info"></div></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_home" index="home" route="/cn/home">首页</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_intro" index="intro" route="/cn/intro">人物简介</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_work" index="work" route="/cn/work">攻略集锦</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_staff" index="staff" route="/cn/staff">STAFF</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_QA" index="QA" route="/cn/QA">Q&A</el-menu-item></el-col>
          <el-col :span="3"><el-menu-item class="contents btn_shop" index="shop" route="/cn/shop">周边</el-menu-item></el-col>
          <el-col :span="2"><el-button class="contents btn_language" @select="change_lang" @click="change_lang">中文</el-button></el-col>
        </el-row>
      </el-menu>
    </el-row>
  </el-container>
</template>

<script>
export default {
  methods: {
    change_lang: function () {
      this.$router.push('/en/' + this.page)
    }
  },
  data () {
    return {
      page: 'shop'
    }
  }
}
</script>

<style>
.page_shop {
  width: 100%;
  max-width: 1920px;
  margin: auto;
  padding-top: 2%;
  padding-bottom: 5%;
}

</style>
