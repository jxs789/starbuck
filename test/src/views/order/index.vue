<template>
  <div>
    排序
    {{userinfo}}
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["userinfo"])
  },
  methods: {
    ...mapActions('user',['getUserInfo'])
  },
  created() {
    console.log(this)
    this.getUserInfo()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
</style>