<template>
  <el-container direction="vertical">
    <el-main class="page_work_header">
      <img src="./work/img_banner攻略集锦.png" class="work_banner">
    </el-main>
    <el-row style="width: 100%; max-width: 1920px; height: 10vw; max-height: 192px; margin: auto;" justify="center" type="flex" :class="show_work">
      <el-col :span="9">
        <el-button class="btn_work_avg" @click="show_avg_work">

        </el-button>
      </el-col>
      <el-col :span="9">
        <el-button class="btn_work_rpg" @click="show_rpg_work">

        </el-button>
      </el-col>
    </el-row>
    <el-container direction="horizontal" v-if="show_work === 'show_avg_work'" style="width: 100%; max-width: 1920px; margin: auto;">
      <el-main class="work_menu" :class="show_item">
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_1" @click="change_item('1')">
            界面指引攻略
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_2" @click="change_item('2')">
            个人攻略
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_3" @click="change_item('3')">
            角色攻略
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_4" @click="change_item('4')" style="text-indent: 4.6vw;">
            温迪
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_5" @click="change_item('5')" style="text-indent: 4.6vw;">
            迪卢克
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_6" @click="change_item('6')" style="text-indent: 4.6vw;">
            钟离
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_7" @click="change_item('7')" style="text-indent: 4.6vw;">
            阿贝多
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_8" @click="change_item('8')" style="text-indent: 4.6vw;">
            凯亚
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_9" @click="change_item('9')" style="text-indent: 4.6vw;">
            空
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_10" @click="change_item('10')" style="text-indent: 4.6vw;">
            达达利亚
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_11" @click="change_item('11')" style="text-indent: 4.6vw;">
            魈
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_12" @click="change_item('12')" style="text-indent: 4.6vw;">
            温迪
          </el-button>
        </el-row>
      </el-main>
      <el-main class="work_dividing_line">
      </el-main>
      <el-main class="work_content">
        <div v-if="show_item === 'show_item_1'">
          界面指引攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_2'">
          个人攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_3'">
          角色攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_4'">
          温迪攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_5'">
          迪卢克攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_6'">
          钟离攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_7'">
          阿贝多攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_8'">
          凯亚攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_9'">
          空攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_10'">
          达达利亚攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_11'">
          魈攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_12'">
          温迪攻略内容
        </div>
      </el-main>
    </el-container>
    <el-container direction="horizontal" v-if="show_work === 'show_rpg_work'" style="width: 100%; max-width: 1920px; margin: auto;">
      <el-main class="work_menu" :class="show_item">
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_1" @click="change_item('1')">
            操作攻略
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_2" @click="change_item('2')">
            主线攻略
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_3" @click="change_item('3')">
            个人线攻略
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_4" @click="change_item('4')">
            支线攻略
          </el-button>
        </el-row>
        <el-row class="menu_item_row">
          <el-button class="menu_item_btn item_5" @click="change_item('5')">
            彩蛋攻略
          </el-button>
        </el-row>
      </el-main>
      <el-main class="work_dividing_line">
      </el-main>
      <el-main class="work_content">
        <div v-if="show_item === 'show_item_1'">
          操作攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_2'">
          主线攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_3'">
          个人线攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_4'">
          支线攻略内容
        </div>
        <div v-else-if="show_item === 'show_item_5'">
          彩蛋攻略内容
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    show_avg_work () {
      this.show_work = 'show_avg_work'
      this.show_item = 'show_item_1'
    },
    show_rpg_work () {
      this.show_work = 'show_rpg_work'
      this.show_item = 'show_item_1'
    },
    change_item (id) {
      this.show_item = 'show_item_' + id
    }
  },
  data () {
    return {
      show_work: 'show_avg_work',
      show_item: 'show_item_1'
    }
  }
}
</script>

<style>
.work_banner {
  width: 100%;
}

.btn_work_avg {
  width: 60%;
  padding: 0 0 10% 0;
  margin-top: 7%;
  background-image: url("./work/btn_AVG游戏攻略.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: 0;
}

.show_avg_work .btn_work_avg,
.btn_work_avg:hover {
  background-image: url("./work/img_AVG游戏攻略.png");
}

.btn_work_rpg {
  width: 60%;
  padding: 0 0 10% 0;
  max-height: 100px;
  margin-top: 7%;
  background-image: url("./work/btn_RPG游戏攻略.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: 0;
}

.show_rpg_work .btn_work_rpg,
.btn_work_rpg:hover {
  background-image: url("./work/img_RPG游戏攻略.png");
}

.work_menu {
  width: 20vw;
  text-align: left;
  margin: 0 1% 2% 3%;
  font-size: 2.1vw;
  letter-spacing: 0.2vw;
  min-width: 90px;
}

.menu_item_row {
  margin: 0 0 10% 0;
}

.menu_item_btn {
  color: #d1caf5;
  font-family: 宋体;
  font-weight: bold;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 2.1vw;
  max-font-size: 20px;
  letter-spacing: 0.2vw;
}

.show_item_1 .item_1,
.show_item_2 .item_2,
.show_item_3 .item_3,
.show_item_4 .item_4,
.show_item_5 .item_5,
.show_item_6 .item_6,
.show_item_7 .item_7,
.show_item_8 .item_8,
.show_item_9 .item_9,
.show_item_10 .item_10,
.show_item_11 .item_11,
.show_item_12 .item_12,
.menu_item_btn:hover {
  color: #ffffff;
  text-shadow: 0 0 4px #d1a8ff;
  background-color: transparent;
}

.work_dividing_line {
  width: 4px;
  background-image: url("./work/img_攻略分割线.png");
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
}

.work_content {
  width: 100%;
  margin-left: 2%;
  margin-top: 0vw;
  text-align: left;
  color: #ffffff;
  font-size: 1.8vw;
}
</style>
