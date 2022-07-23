<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#2d3a4b"
    default-active="/main/analysis"
    text-color="#fff"
    router
    :collapse="!$store.state.layoutStore.isExpand"
    class="el-menu-vertical-demo"
    style="height: 100%"
    unique-opened
  >
    <template v-for="menuItem in menuList" :key="menuItem.id">
      <!-- 渲染单级菜单 -->
      <el-menu-item
        :index="menuItem.url"
        v-if="!menuItem.children || !menuItem.children.length"
      >
        <!-- icon 图标 -->
        <el-icon v-if="menuItem.icon">
          <!-- 动态组件 -->
          <component :is="handleMenuIconName(menuItem.icon)"></component>
        </el-icon>
        <template #title>{{ menuItem.name }}</template>
      </el-menu-item>

      <!-- 渲染多级菜单 -->
      <el-sub-menu :index="menuItem.url" v-else>
        <!-- 1级菜单的标题 -->
        <template #title>
          <!-- icon 图标 -->
          <el-icon v-if="menuItem.icon">
            <!-- 动态组件 -->
            <component :is="handleMenuIconName(menuItem.icon)"></component>
          </el-icon>
          <span>{{ menuItem.name }}</span>
        </template>

        <!-- 渲染多级菜单中的子菜单 -->
        <template v-for="childItem in menuItem.children" :key="childItem.id">
          <!-- 子菜单是单级菜单的情况 -->
          <el-menu-item
            :index="childItem.url"
            v-if="!childItem.children || !childItem.children.length"
          >
            <el-icon v-if="childItem.icon">
              <component :is="handleMenuIconName(childItem.icon)"></component>
            </el-icon>
            <template #title>{{ childItem.name }}</template>
          </el-menu-item>

          <!-- 子菜单是多级菜单的情况 -->
          <!-- 2级菜单 -->
          <el-sub-menu :index="childItem.url" v-else>
            <template #title>
              <!-- icon 图标 -->
              <el-icon v-if="childItem.icon">
                <!-- 动态组件 -->
                <component :is="handleMenuIconName(childItem.icon)"></component>
              </el-icon>
              <span>{{ childItem.name }}</span>
            </template>

            <!-- 3级菜单 -->
            <template v-for="item in childItem.children" :key="item.id">
              <el-menu-item :index="item.url">
                <!-- icon 图标 -->
                <el-icon v-if="item.icon">
                  <!-- 动态组件 -->
                  <component :is="handleMenuIconName(item.icon)"></component>
                </el-icon>
                <template #title>{{ item.name }}</template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

// 菜单列表数据
const menuList = computed(() => store.state.userStore.menuList);

// 处理Icon图标的名字
function handleMenuIconName(name) {
  return name.slice(8);
}

console.log(menuList.value);
</script>

<style lang="scss">
/* 取消menu的右侧边框 */
.el-menu {
  border: none;
}
</style>
