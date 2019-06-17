<template>
  <div class="head">
    <p></p>
    <ul>
      <li
        v-for="(item) in head"
        :key="item.id"
        :class="{'bg':item.id===index}"
        @click="Click(item.id,item.type)"
      >{{item.name}}</li>
    </ul>
    <div>
      <span class="iconfont icon-iconplsd"></span>
      <span class="iconfont icon-renwu"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      index: 0,
      head: [
        {
          name: "加班",
          id: 0,
          type:'overtime'
        },
        {
          name: "休假",
          id: 1,
          type:'vacation'
        }
      ]
    };
  },
  computed: {},
  methods: {
    Click(ind,type){
      this.index=ind;
      this.$emit('head',ind,type)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/static/_minix.scss";
@import "@/static/common.scss";
.head {
  width: 100%;
  margin-top: pxTorem(30px);
  @include box_flex;
  @include justify(space-between);
  @include align;
  @include sizing;
  padding: 0 10px;
  ul {
    @include box_flex;
    @include justify(space-between);
    margin-left: pxTorem(75px);
    border: 1px solid #0c6142;
    border-radius: pxTorem(20px);
    li {
      font-size: pxTorem(14px);
      display: inline-block;
      padding: pxTorem(3px) pxTorem(30px);
    }
    li:nth-child(1) {
      border-bottom-left-radius: pxTorem(20px);
      border-top-left-radius: pxTorem(20px);
    }
    li:nth-child(2) {
      border-bottom-right-radius: pxTorem(20px);
      border-top-right-radius: pxTorem(20px);
    }
    .bg {
      background: #0c6142;
      color: #fff;
    }
  }
  div {
    span {
      @include sizing;
      font-size: pxTorem(20px);
      padding: 0 15px;
    }
  }
}
</style>