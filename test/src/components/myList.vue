<template>
  <div>
    <div
      class="count"
      @click="$router.push({
      name:'detail',
      params:{
        type:item.list_type,
        id:item.applicationNumber
      }
    })"
    >
      <div>
        <ul>
          <li>{{item.applicationNumber}}</li>
          <li>
            <p class="iconfont icon-icon_duihao-mian"></p>待审批
          </li>
        </ul>
        <ol>
          <li>
            <p>
              申请人
              <span>{{item.nickname}}</span>
            </p>
            <p>
              加班类型
              <span>{{showType}}</span>
            </p>
          </li>
          <li>
            <p>
              加班日期
              <span>{{new Date(item.startTime).toLocaleDateString()}}</span>
            </p>
            <p>
              加班时长
              <span>
                {{
                showTime
                }}
              </span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
  
<script>
import { showTest, showTime } from "@/utiles/time";
export default {
  props: ["item"],
  components: {},
  data() {
    return {};
  },
  computed: {
    showType() {
      return showTest(this.item.list_type, this.item.type);
    },
    showTime() {
      return showTime(this.item.startTime, this.item.endTime);
    }
  },
  methods: {},
  created() {
    //传参 path:`/detail/${item.list_type}/${item.applicationNumber}`
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "@/static/_minix.scss";
@import "@/static/common.scss";

.count {
  margin-top: pxTorem(15px);
  border-bottom: pxTorem(10px) solid #f8f8f8;

  div {
    @include sizing;
    padding: 0 pxTorem(15px);
    ul {
      @include box_flex;
      @include justify(space-between);
      @include align;
      line-height: pxTorem(35px);
      li {
        @include box_flex;
        font-size: pxTorem(15px);
        color: #666;
        p {
          margin: 0 10px;
          color: yellow;
          font-size: pxTorem(20px);
        }
      }
    }
    ol {
      @include box_flex;
      @include justify(space-between);
      @include align;
      line-height: pxTorem(25px);
      margin-bottom: pxTorem(15px);
      li {
        font-size: pxTorem(14px);
        p {
          color: #666;
          span {
            margin-left: pxTorem(15px);
            color: #000;
          }
        }
      }
    }
  }
}
</style>

