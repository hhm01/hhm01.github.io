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
      page: 'QA',
      qa_list: [
        {
          index: '1.',
          question: '问题1',
          answer: '回答一回答一回答一回答一回答一回答一'
        },
        {
          index: '2.',
          question: '问题2',
          answer: '回答二回答二回答二回答二回答二回答二'
        },
        {
          index: '3.',
          question: '问题3',
          answer: '回答二回答二回答二回答二回答二回答二'
        },
        {
          index: '4.',
          question: '问题4',
          answer: '回答二回答二回答二回答二回答二回答二'
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
  font-family: '宋体';
  margin-bottom: 1%;
  font-weight: bold;
}

.qa_answer {
  font-size: 1.8vw;
  color: #ffffff;
  font-family: '宋体';
  font-weight: bold;
}

</style>
