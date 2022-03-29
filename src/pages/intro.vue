<template>
  <el-container class="intro_page" direction="horizontal">
    <el-aside width="20%" class="role_names_btn">
      <el-row :class="role_focus" class="row_name" v-for="role in roles" :key="role">
        <el-button :class="role.id" class="btn_name" @click="change_show(role.id)">
        </el-button>
      </el-row>
    </el-aside>
    <el-main class="role_img" v-if="role_focus==='show_role9'">
      <div class="role_img_arc">
          <el-popover class="popover_1" popper-class="popper_comment" placement="left" trigger="click" :content="roles[8].comment_1">
            <el-button slot="reference" class="head_comment head_91" circle></el-button>
          </el-popover>
          <el-popover class="popover_2" popper-class="popper_comment" placement="left" trigger="click" :content="roles[8].comment_2">
            <el-button slot="reference" class="head_comment head_92" circle></el-button>
          </el-popover>
          <el-popover class="popover_3" popper-class="popper_comment" placement="left" trigger="click" :content="roles[8].comment_3">
            <el-button slot="reference" class="head_comment head_93" circle></el-button>
          </el-popover>
      </div>
    </el-main>
    <el-main class="role_img" v-else>
      <div class="role_img_arc">
        <el-popover class="popover_1" popper-class="popper_comment" placement="left" trigger="click" :content="roles[0].comment_1">
          <el-button slot="reference" class="head_comment head_11" circle></el-button>
        </el-popover>
        <el-popover class="popover_2" popper-class="popper_comment" placement="left" trigger="click" :content="roles[0].comment_2">
          <el-button slot="reference" class="head_comment head_12" circle></el-button>
        </el-popover>
        <el-popover class="popover_3" popper-class="popper_comment" placement="left" trigger="click" :content="roles[0].comment_3">
          <el-button slot="reference" class="head_comment head_13" circle></el-button>
        </el-popover>
      </div>
    </el-main>
    <el-main class="role_others" v-if="role_focus==='show_role9'">
      <el-row class="others_1">
        <img src="./intro/gif_role9.gif" style="height: 7vw; max-height: 134.4px;">
      </el-row>
      <el-row class="others_2">
        {{ roles[8].name }}
      </el-row>
      <el-row class="others_3">
        {{ roles[8].introduction }}
      </el-row>
    </el-main>
    <el-main class="role_others" v-else>
      <el-row class="others_1">
        <img src="./intro/img_小人图.png" style="height: 7vw; max-height: 134.4px;">
      </el-row>
      <el-row class="others_2">
        主角名字
      </el-row>
      <el-row class="others_3">
        内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    change_show (role) {
      this.role_focus = 'show_' + role
    }
  },
  data () {
    return {
      role_focus: 'show_role1',
      roles: [
        {
          id: 'role1',
          name: '空',
          comment_1: '印象评价印象评价印象评价',
          comment_2: '印象评价印象评价印象评价',
          comment_3: '印象评价印象评价印象评价'
        },
        {
          id: 'role2'
        },
        {
          id: 'role3'
        },
        {
          id: 'role4'
        },
        {
          id: 'role5'
        },
        {
          id: 'role6'
        },
        {
          id: 'role7'
        },
        {
          id: 'role8'
        },
        {
          id: 'role9',
          name: '达达利亚',
          comment_1: '充满斗志的年轻武人。其人如刀刃般凌厉，你要看清他到底剑指何方，勿受其伤。',
          comment_2: '这位来自至冬的同学想必酒量不错吧~真期待和他在酒桌上较量一番。诶？危险份子？哈哈，不用担心，在美酒前动粗这么不解风情的事，他应该是不会做的。你说对吧？',
          comment_3: '听“她”提起过这个名字，是很好用的棋子——我确实是在夸奖他。毕竟，能从深渊爬出的人类千年难遇。',
          introduction: '去年入学的提瓦特学院一年生。虽说如此，实际上没有半点【学弟】的自觉，是个沉迷战斗让教授和同学都头疼的危险人物。实战成绩在全学院数一数二，对同样战力优异的女主另眼相看，称呼其为“伙伴”——.但在他无光的蓝瞳之下，似乎暗涌着别样的狂澜。'
        }
      ]
    }
  }
}
</script>

<style>
.intro_page {
  max-width: 1920px;
  margin: auto;
}

.role_names_btn {
  align-items: center;
  height: 50vw;
  max-height: 960px;
  padding-top: 10%;
}

.row_name {
  height: 3vw;
  text-align: left;
  display: flex;
  align-items: center;
  max-height: 57.5px;
}

.btn_name {
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  background-color: transparent;
  border: 0;
  padding: 0;
  width: 45%;
  height: 50%;
  margin: auto 0 auto 3%;
}

.btn_name:hover,
.show_role1 .role1,
.show_role2 .role2,
.show_role3 .role3,
.show_role4 .role4,
.show_role5 .role5,
.show_role6 .role6,
.show_role7 .role7,
.show_role8 .role8,
.show_role9 .role9
{
  background-color: transparent;
  width: 90%;
  height: 100%;
}

.row_name .role1 {
  background-image: url("./intro/btn_name1.png");
}

.row_name .role1:hover,
.show_role1 .role1 {
  background-image: url("./intro/img_name1.png");
}

.row_name .role2 {
  background-image: url("./intro/btn_name2.png");
}

.row_name .role2:hover,
.show_role2 .role2 {
  background-image: url("./intro/img_name2.png");
}

.row_name .role3 {
  background-image: url("./intro/btn_name3.png");
}

.row_name .role3:hover,
.show_role3 .role3 {
  background-image: url("./intro/img_name3.png");
}

.row_name .role4 {
  background-image: url("./intro/btn_name4.png");
}

.row_name .role4:hover,
.show_role4 .role4 {
  background-image: url("./intro/img_name4.png");
}

.row_name .role5 {
  background-image: url("./intro/btn_name5.png");
}

.row_name .role5:hover,
.show_role5 .role5 {
  background-image: url("./intro/img_name5.png");
}

.row_name .role6 {
  background-image: url("./intro/btn_name6.png");
}

.row_name .role6:hover,
.show_role6 .role6 {
  background-image: url("./intro/img_name6.png");
}

.row_name .role7 {
  background-image: url("./intro/btn_name7.png");
}

.row_name .role7:hover,
.show_role7 .role7 {
  background-image: url("./intro/img_name7.png");
}

.row_name .role8 {
  background-image: url("./intro/btn_name8.png");
}

.row_name .role8:hover,
.show_role8 .role8 {
  background-image: url("./intro/img_name8.png");
}

.row_name .role9 {
  background-image: url("./intro/btn_name9.png");
}

.row_name .role9:hover,
.show_role9 .role9 {
  background-image: url("./intro/img_name9.png");
}

.role_img {
  width: 60%;
  margin-left: -10%;
  height: 50vw;
  max-height: 960px;
  background-image: url("./intro/img_role1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.div_head {
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}

.head_comment {
  width: 5vw;
  height: 5vw;
  max-width: 96px;
  max-height: 96px;
  background-color: transparent;
  background-size: 90%;
  background-repeat: no-repeat;
  border: 0;
}

.head_comment:hover, .head_comment:focus {
  border: 0;
  background-size: 100%;
}

.popper_comment {
  background-color: #d1caf5;
  border: 0;
  color: #1f203e;
  width: 15vw;
  font-size: 0.8vw;
  padding: 1%;
}

.popper__arrow,
.popper__arrow:after {
  border-left-color: #d1caf5!important;
}

.role_img_arc {
  height: 70%;
  background-image: url("./intro/img_弧线.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  margin: 25% 10% 0 0;
}

.popover_1 {
  top: 32%;
  left: 62%;
  position: relative;
}

.head_11 {
  background-image: url("./intro/btn_txrole1.png")
}

.popover_2 {
  top: 57%;
  left: 47%;
  position: relative;
}

.head_12 {
  background-image: url("./intro/btn_txrole2.png")
}

.popover_3 {
  top: 79%;
  left: 22%;
  position: relative;
}

.head_13 {
  background-image: url("./intro/btn_txrole3.png")
}

.head_91 {
  background-image: url("./intro/btn_txrole1.png")
}

.head_92 {
  background-image: url("./intro/btn_txrole2.png")
}

.head_93 {
  background-image: url("./intro/btn_txrole3.png")
}

.role_others {
  width: 40%;
  margin-right: 5%;
}

.others_1 {
  margin-top: 45%;
  text-align: left;
}

.others_2 {
  color: #ffffff;
  font-size: 3.5vw;
  font-family: '宋体';
  text-align: left;
  margin: 3% 0;
}

.others_3 {
  color: #ffffff;
  font-size: 1.2vw;
  font-family: '宋体';
  text-align: left;
  line-height: 1.8vw;
  letter-spacing: 0.1vw;
}

</style>
