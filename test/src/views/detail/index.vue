<template>
  <div class="wrap">
    <myHeader :title="titleText">
      <div class="cc"></div>
    </myHeader>
    <div class="header">
      <p class="pic"></p>
      <p class="name">
        <span>申请人姓名</span>
        <span>直接主管</span>
      </p>
      <p class="long">
        <span>{{list.nickname}}</span>
        <span>轻易超</span>
      </p>
    </div>
    <div class="count">
      <div class="det">
        <h5>申请信息</h5>
        <p>
          {{title}}日期* {{new Date(list.startTime).toLocaleDateString()}}
          <span>请选择</span>
        </p>
        <p>{{title}}类型 {{showType}}</p>
        <p>
          {{title}}起始时间* {{new Date(list.startTime).toLocaleString()}}
          <span>请选择</span>
        </p>
        <p>
          {{title}}截止时间* {{new Date(list.endTime).toLocaleString()}}
          <span>请选择</span>
        </p>
        <p>共计实数 {{showTime}}</p>
      </div>
      <div class="yuanyin">
        <h5>{{title}}事由:</h5>
        <input type="textarea" :value="list.describes">
      </div>
      <div class="fujian">
        上传附件
        <div v-for="(val,index) in list.annex" :key="index">
          <img :src="'http://localhost:3000/'+val" alt>
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="cancle" @click="$router.back()">取消</button>
      <button class="submit">提交</button>
    </div>
  </div>
</template>
<script>
import api from "@/api/";
import { showTest, showTime } from "../../utiles/time";
export default {
  props: {
    type: String,
    id: String
  },
  components: {},
  data() {
    return {
      list: {}
    };
  },
  computed: {
    showType() {
      return showTest(this.list.type, this.list.list_type);
    },
    titleText() {
      return this.type === "overtime" ? "办公室加班申请" : "办公室调休申请";
    },
    showTime() {
      return showTime(this.list.startTime, this.list.endTime);
    },
    title() {
      return this.type === "overtime" ? "加班" : "调休";
    }
  },
  methods: {},
  created() {
    api[this.type + "Detail"]({ applicationNumber: this.id }).then(res => {
      console.log(res.data.annex);
      this.list = res.data;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss" >
@import '@/scss/detail.scss' 
</style>