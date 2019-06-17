<template>
  <div class="nav">
    <dl
      :class="{'active':item.id===index}"
      @click="Click(item.id)"
      v-for="(item) in list"
      :key="item.id"
    >
      <dt>
        <span :class="'iconfont '+item.icon"></span>
      </dt>
      <dd>{{item.title}}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      index: 0,
      list: [
        {
          title: "待处理",
          icon: "icon-shijian",
          id: 0
        },
        {
          title: "已发起",
          icon: "icon-zhifeiji",
          id: 1
        },
        {
          title: "已处理",
          icon: "icon-duihao2",
          id: 2
        }
      ]
    };
  },
  computed: {},
  methods: {
    Click(ind) {
      this.index = ind;
      this.$emit('change',ind)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/static/_minix.scss";
@import "@/static/common.scss";
.nav {
  width: 100%;
  height: pxTorem(80px);
  @include box_flex;
  @include justify(space-around);
  @include align;
  box-shadow: 0 25px 50px #eee;
  dl {
    line-height: pxTorem(20px);
    color: #ccc;
    dt {
      text-align: center;
      span {
        font-size: pxTorem(25px);
      }
    }
    dd {
      text-align: center;
    }
  }
  .active {
    color: #0c6142;
  }
}
</style>
