<template>
  <el-container class="page_staff" direction="vertical">
    <el-main class="page_staff_header">
      <img src="./staff/img_bannerSTAFF.png" class="staff_banner">
    </el-main>
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
</template>

<script>
export default {
  methods: {

  },
  data () {
    return {
      staff_list: [
        {
          position: '职位',
          name_list: '名字'
        },
        {
          position: '职位',
          name_list: '名字、名字、名字、名字、名字'
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
  background-image: url("./home/img_底图拉伸自适应.png");
  background-size: contain;
}

.staff_banner {
  width: 100%;
}

.staff_img_1 {
  margin: 20px 0;
}

.position_name_list {
  width: 70%;
  margin: 20px auto;
  text-align: left;
}

.text_position {
  font-size: 24px;
  color: #beb4f1;
  font-family: '宋体';
  margin-bottom: 10px;
}

.text_name_list {
  font-size: 30px;
  color: #ffffff;
  font-family: '宋体';
}

.staff_img_2 {
  width: 90%;
  margin: 5% 0;
}

</style>
