<template>
  <header>
    <span class="iconfont icon-zuojiantou" @click="$router.back()"></span>
    <p>{{titleTest}}</p>
    <slot></slot>
  </header>
</template>
<script>
export default {
  props: {
    back: {
      default: true,
      type: Boolean
    },
    title: {
      default: "",
      type: String
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    titleTest() {
      return this.title ? this.title : this.$route.meta.title;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/static/_minix.scss";
@import "@/static/common.scss";
header {
  width: 100%;
  height: pxTorem(44px);
  font-size: pxTorem(20px);
  @include box_flex;
  @include justify(space-between);
  @include align;
  @include sizing;
  padding: 0px 10px;
  p {
    font-size: pxTorem(16px);
    margin-left: pxTorem(55px);
  }
  div {
    @include box_flex;
    @include justify(space-between);
    @include align;
    span {
      margin: 0 15px;
    }
  }
}
</style>