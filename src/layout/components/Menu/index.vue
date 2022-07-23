<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#2d3a4b"
    :default-active="defaultActive"
    text-color="#fff"
    router
    :collapse="!$store.state.layoutStore.isExpand"
    class="el-menu-vertical-demo"
    style="height: 100%"
    :unique-opened="false"
  >
    <MenuItem v-for="navMenu in menuList" :key="navMenu" :menuItem="navMenu" />
  </el-menu>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
const store = useStore();
const route = useRoute();

const defaultActive = computed(() => {
  return route.path;
});

// 菜单列表数据
const menuList = computed(() => store.state.userStore.menuList);
</script>

<style lang="scss">
/* 取消menu的右侧边框 */
.el-menu {
  border: none;
}
</style>
