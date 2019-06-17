<template>
  <keep-alive include='home'>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import request from "./utiles/request";
export default {
  name: "App",
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {
    request.get("/api/user/info");
  }
};
</script>

<style lang="scss">
@import "./static/_minix.scss";
@import "./static/common.scss";
.wrap,
html,
body {
  width: 100%;
  height: 100%;
}
.wrap {
  @include box_flex;
  @include direction(column);
  font-size: pxTorem(14px);
}
</style>
