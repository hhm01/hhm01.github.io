<template>
  <el-container class="intro_page" direction="horizontal">
    <el-aside width="20%" class="role_names_btn">
      <el-row :class="role_focus" class="row_name" v-for="role in roles" :key="role">
        <el-button :class="role.id" class="btn_name" @click="change_show(role.id)">
        </el-button>
      </el-row>
    </el-aside>
    <el-main class="role_img">

    </el-main>
    <el-main class="role_others">
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
          id: 'role1'
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
          id: 'role9'
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
