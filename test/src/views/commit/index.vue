<template>
  <div class="wrap">
     <button>-</button>
    <span>{{setNum}}</span>
    <button>+</button>
    <myHeader :title="titleText">
      <div class="cc">  </div>
    </myHeader>
    <div class="header">
      <p class="pic"></p>
      <p class="name">
        <span>申请人姓名</span>
        <span>直接主管</span>
      </p>
      <p class="long">
        <span>{{userinfo.nickname}}</span>
        <span>轻易超</span>
      </p>
    </div>
    <div class="count">
      <div class="det">
        <h5>申请信息</h5>
        <p>
          {{title}}日期*
          <el-date-picker v-model="data" placeholder="选择日期"/>
        </p>
        <p>
          {{title}}类型
          <select>
            <option value="-1">默认</option>
            <option
              v-for="item in this[type+'Type']"
              :key="item.name"
              :value="item.id"
            >{{item.name}}</option>
          </select>
        </p>
        <p>
          {{title}}起始时间*
          <el-time-picker
            v-model="startTime"
            :picker-options="{
            selectableRange: '07:00:00 - 22:00:00'
            }"
            placeholder="9:30:00"
          />
        </p>
        <p>
          {{title}}截止时间*
          <el-time-picker
            v-model="endTime"
            :picker-options="{
            selectableRange: '07:00:00 - 22:00:00'
            }"
            placeholder="19:00:00"
          />
        </p>
        <p>共计实数 {{showTime?showTime:0}}</p>
      </div>
      <div class="yuanyin">
        <h5>{{title}}事由:</h5>
        <input type="textarea">
      </div>
      <div class="fujian">
        上传附件
        <el-upload class="upload-demo" action='/api/upload' list-type="picture" multiple>
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>
    <div class="btn">
      <button class="cancle" @click="$router.back()">取消</button>
      <button class="submit" @click='subcont'>提交</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { showTime } from "@/utiles/time";
export default {
  props: {
    type: String
  },
  components: {},
  data() {
    return {
      data: "",
      startTime: "",
      endTime: "",
      overtimeType: [
        {
          name: "双休日加班",
          id: 1
        },
        {
          name: "节假日加班",
          id: 2
        },
        {
          name: "工作日加班",
          id: 3
        }
      ],
      vacationType: [
        {
          name: "年假",
          id: 1
        },
        {
          name: "调休",
          id: 2
        }
      ]
    };
  },
  computed: {
    titleText() {
      return this.type === "overtime" ? "办公室加班申请表" : "办公室调休申请表";
    },
    title() {
      return this.type === "overtime" ? "加班" : "调休";
    },
    ...mapState("user", ["userinfo"]),
    showTime() {
      return showTime(this.startTime, this.endTime);
    }
  },
  methods: {
    ...mapActions("user", ["getUserInfo"]),
    subFile(e) {
      let files = e.target.files[0];
      let { type, size } = files;
    },
    subcont(){

    }
  },
  created() {
    this.getUserInfo();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/scss/detail.scss";
</style>