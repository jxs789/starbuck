<template>
  <div>
    <div class="msg" @click.self="$emit('close')"></div>
    <transition>
      <div class="small">
        <dl @click="$router.push('/commit/overtime')">
          <dt class="iconfont icon-jiaban"></dt>
          <dd>加班</dd>
        </dl>
        <dl @click="$router.push('/commit/vacation')">
          <dt class="iconfont icon-shenqingxiujia"></dt>
          <dd>休假</dd>
        </dl>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    flag: Boolean
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/static/_minix.scss";
@import "@/static/common.scss";
.msg {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: absolute;
  top: 0;
}
.small {
  width: 100%;
  height: pxTorem(150px);
  background: #fff;
  position: absolute;
  bottom: 0;
  z-index: 9;
  display: flex;
  justify-content: space-around;
  @include align;
  dl {
    dt {
      font-size: pxTorem(40px);
    }
    dd {
      text-align: center;
    }
  }
  dl:first-child {
    dt {
      color: orange;
    }
  }
  dl:last-child {
    dt {
      color: #006341;
    }
  }
}
.v-enter,
.v-leave-to {
  .small {
    transform: translateY(100%);
  }
}
.v-enter-active,
.v-leave-active {
  .small {
    transition: transform 10s;
  }
}
.v-enter-to,
.v-leave {
  .small {
    transform: translateY(0);
  }
}
.mask {
  background: #006341;
  position: absolute;
  bottom: pxTorem(20px);
  border-radius: pxTorem(30px);
  color: #fff;
  text-align: center;
  line-height: pxTorem(30px);
  right: pxTorem(20px);
}
</style>