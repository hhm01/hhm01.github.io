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
      </el-main>
      <el-main class="work_dividing_line">
      </el-main>
      <el-main class="work_content">

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    show_avg_work () {
      this.show_work = 'show_avg_work'
    },
    show_rpg_work () {
      this.show_work = 'show_rpg_work'
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
  width: 18%;
  text-align: left;
  margin-left: 4%;
  font-size: 2.1vw;
  letter-spacing: 0.2vw;
  margin-bottom: 2%;
  min-width: 90px;
}

.menu_item_row {
  margin: 10% 0;
}

.menu_item_btn {
  color: #d1caf5;
  font-family: 宋体;
  font-weight: bold;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: 2.1vw;
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
  width: 80%;
  margin-left: 5%;
}
</style>
