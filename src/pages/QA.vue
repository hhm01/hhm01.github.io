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
  </el-container>
</template>

<script>
export default {
  methods: {

  },
  data () {
    return {
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
