<template>
  <el-container direction="vertical">
    <el-main class="page_qa_header">
      <img src="./QA/img_bannerQA.png" class="qa_banner">
    </el-main>
    <el-container class="page_qa" direction="vertical">
      <el-main class="qa_item" v-for="item in qa_list" :key="item">
        <el-row class="qa_question">
          {{ item.index }}{{ item.question }}
        </el-row>
        <el-row class="qa_answer">
          {{ item.answer }}
        </el-row>
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
      page: 'QA',
      qa_list: [
        {
          index: '1.',
          question: 'Question 1',
          answer: 'Answer 1'
        },
        {
          index: '2.',
          question: 'Question 2',
          answer: 'Answer 2'
        },
        {
          index: '3.',
          question: 'Question 3',
          answer: 'Answer 3'
        },
        {
          index: '4.',
          question: 'Question 4',
          answer: 'Answer 4'
        }
      ]
    }
  }
}
</script>

<style>
.page_qa {
  width: 100%;
  max-width: 1920px;
  margin: auto;
  padding-top: 2%;
  padding-bottom: 5%;
}

.qa_banner {
  width: 100%;
}

.qa_item {
  width: 80%;
  margin: 3% auto;
  text-align: left;
}

.qa_question {
  font-size: 1.8vw;
  color: #beb4f1;
  font-family: 'Times New Roman';
  margin-bottom: 1%;
}

.qa_answer {
  font-size: 1.8vw;
  color: #ffffff;
  font-family: 'Times New Roman';
}

</style>
