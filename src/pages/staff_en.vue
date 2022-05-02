<template>
  <el-container direction="vertical">
    <el-main class="page_staff_header">
      <img src="./staff/img_bannerSTAFF.jpg" class="staff_banner">
    </el-main>
    <el-container class="page_staff" direction="vertical">
      <el-main class="page_staff_list">
        <el-row>
          <el-col>
            <img src="./staff/img_制作者名单.png" class="staff_img_1">
          </el-col>
        </el-row>
      </el-main>
      <el-main class="position_name_list" v-for="item in staff_list" :key="item">
        <el-row class="text_position">
          {{ item.position }}
        </el-row>
        <el-row class="text_name_list">
          {{ item.name_list }}
        </el-row>
      </el-main>
      <el-main>
        <img src="./staff/img_鸽子图.png" class="staff_img_2">
      </el-main>
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
      page: 'staff',
      staff_list: [
        {
          position: 'Position',
          name_list: 'Name'
        },
        {
          position: 'Position',
          name_list: 'Name, Name, Name, Name, Name'
        }
      ]
    }
  }
}
</script>

<style>
.page_staff {
  max-width: 1920px;
  margin: auto;
}

.staff_banner {
  width: 100%;
}

.staff_img_1 {
  margin: 2% 0;
  width: 35%;
}

.position_name_list {
  width: 70%;
  margin: 2% auto;
  text-align: left;
}

.text_position {
  font-size: 1.8vw;
  color: #beb4f1;
  font-family: 'Times New Roman';
  margin-bottom: 1%;
}

.text_name_list {
  font-size: 2.2vw;
  color: #ffffff;
  font-family: 'Times New Roman';
  font-weight: bold;
}

.staff_img_2 {
  width: 90%;
  margin: 5% 0;
}

</style>
