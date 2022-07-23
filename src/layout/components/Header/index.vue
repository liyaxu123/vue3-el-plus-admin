<template>
  <div class="header">
    <!-- 左侧 -->
    <div class="header_left">
      <!-- 展开收缩按钮 -->
      <el-tooltip
        effect="dark"
        :content="$store.state.layoutStore.isExpand ? '收缩' : '展开'"
        placement="right"
      >
        <el-icon size="26px" @click="handleExpand">
          <component
            :is="$store.state.layoutStore.isExpand ? 'Fold' : 'Expand'"
          ></component>
        </el-icon>
      </el-tooltip>

      <!-- 面包屑组件 -->
      <Breadcrumb style="margin-left: 10px" />
    </div>
    <!-- 右侧 -->
    <div class="header_right">
      <Search />
      <Theme />
      <FullScreen />
      <Notify />
      <Language />
      <UserDropDown />
    </div>
    <!-- tag标签 -->
    <div class="header_tag">
      <Tag />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Breadcrumb from "./components/Breadcrumb.vue";
import Search from "./components/Search.vue";
import FullScreen from "./components/FullScreen.vue";
import Notify from "./components/Notify.vue";
import Language from "./components/Language.vue";
import UserDropDown from "./components/UserDropDown.vue";
import Theme from "./components/Theme.vue";
import Tag from "../Tag.vue";

const store = useStore();

function handleExpand() {
  store.commit("updateIsExpand", !store.state.layoutStore.isExpand);
}
</script>

<style lang="scss" scoped>
/* @import "@/style/mixin.scss"; */

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  padding: 0 20px;

  .header_left {
    display: flex;
    align-items: center;
  }

  .header_right {
    display: flex;
    align-items: center;
  }

  .header_tag {
    position: absolute;
    left: 0;
    bottom: -53px;
    width: calc(100% - 10px);
    height: 24px;
    /* @include bg_color(); */
    background-color: var(--el-bg-color);
    border-bottom: 1px solid var(--el-border-color);
    border-top: 1px solid var(--el-border-color);
    display: flex;
    align-items: center;
    padding: 5px;
    /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%); */
  }
}
</style>
