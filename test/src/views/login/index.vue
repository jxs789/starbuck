<template>
  <div class="wrap">
   
    <section>
      <div>
        <input type="text" placeholder="请输入手机号" v-model="inp">
        <input type="password" placeholder="请输入密码" v-model="pwd">
        <button @click="click">登录</button>
      </div>
    </section>
  </div>
</template>
<script>
import api from "@/api/";
import router from '../../router';
const phone = /^1[3579]\d{9}$/;
import {mapState,mapMutations} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {
      inp: "",
      pwd: ""
    };
  },
  computed: {
    ...mapState(['setNum'])
  },
  methods: {
    click() {
      if (phone.test(this.inp.trim()) && this.pwd.trim() !== "") {
       api.userLogin({
          phone: this.inp,
          password: this.pwd
        }).then(res=>{
          window.localStorage.setItem('token',res.token)
          this.$router.push('/home')
        }).catch(error=>{
          console.log(error)
        })
      } else {
        console.log("登录失败");
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/static/_minix.scss";
@import "@/static/common.scss";
section {
  @include flex;
  div {
    @include box_flex;
    @include direction(column);
    input {
      width: 100%;
      height: pxTorem(44px);
      height: pxTorem(44px);
      border-bottom: 1px solid #ccc;
    }
    button {
      width: 100%;
      height: pxTorem(44px);
      background: #ccc;
      color: #fff;
      border: none;
      font-size: pxTorem(16px);
    }
  }
}
</style>