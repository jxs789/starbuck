<template>
  <div class="wrap">
    <myHeader>
      <div>
        <span class="iconfont icon-rili"></span>
        <span class="iconfont icon-fangdajing"></span>
      </div>
    </myHeader>
    <myNav @change="change"/>
    <myHead @head="head"/>
    <div class="box">
      <myList v-for="(item,index) in newList" :key="index" :item="item"/>
    </div>
    <button class="btn" @click="flag=true">+发起任务</button>
    <myMask :flag='flag' v-show='flag' @close='flag=false'/>
  </div>
</template>
<script>
import myNav from "../../components/myNav";
import myHead from "../../components/myHead";
import myList from "../../components/myList";
import api from "@/api/";
import myMask from '@/components/myMask'
export default {
  name: "home",
  props: {
  },
  components: {
    myNav,
    myHead,
    myList,
    myMask
  },
  data() {
    return {
      flag: false,
      newList: [],
      tableOptions: {
        status: 0,
        type: "overtime",
        create_at: 10,
        pageSize: 10,
        page: 1
      }
    };
  },
  computed: {},
  methods: {
    getTaskList() {
      api
        .homeData({
          ...this.tableOptions
        })
        .then(res => {
          console.log(res.data);
          this.newList = res.data;
        });
    },
    change(ind) {
      this.tableOptions.status = ind;

      this.getTaskList();
    },
    head(ind, type) {
      this.tableOptions.type = type;
      this.getTaskList();
    }
  },
  created() {
    this.getTaskList();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../../static/_minix.scss";
@import "../../static/common.scss";
.box {
  overflow: scroll;
  flex: 1;
}
.btn {
  width: pxTorem(110px);
  height: pxTorem(40px);
  background: #0c6142;
  border-radius: pxTorem(25px);
  text-align: center;
  line-height: pxTorem(40px);
  color: #fff;
  font-size: pxTorem(14px);
  position: fixed;
  bottom: pxTorem(15px);
  right: pxTorem(15px);
  border: none;
  z-index: 9;
}

</style>
