<template>
  <!-- 只有1级 -->
  <el-menu-item
    v-if="!hasChildren(menuItem)"
    :index="menuItem.url || menuItem.id + ''"
  >
    <el-icon v-if="menuItem.icon">
      <component :is="handleMenuIconName(menuItem.icon) || 'el-icon-menu'" />
    </el-icon>
    <template #title>
      <span>{{ menuItem.title }}</span>
    </template>
  </el-menu-item>
  <!-- 多级 -->
  <el-sub-menu v-else :index="menuItem.url || menuItem.id + ''">
    <template #title>
      <el-icon v-if="menuItem.icon">
        <component :is="handleMenuIconName(menuItem.icon) || 'el-icon-menu'" />
      </el-icon>
      <span>{{ menuItem.title }}</span>
    </template>
    <!-- 递归组件 -->
    <MenuItem
      v-for="child in menuItem.children"
      :key="child.url"
      :menuItem="child"
    ></MenuItem>
  </el-sub-menu>
</template>

<script>
export default {
  // 递归组件一定要设置name
  name: "MenuItem",
  props: {
    // menuItem的数据结构
    menuItem: {
      type: Object,
      required: true,
      default: () => ({
        id: 1,
        title: "系统设置",
        url: "",
        icon: "el-icon-setting",
        pid: 0,
        type: 1,
        status: 1,
        children: [
          {
            id: 2,
            pid: 1,
            title: "菜单管理",
            icon: "",
            type: 2,
            url: "/menu",
            status: 1,
          },
          {
            id: 3,
            pid: 1,
            title: "角色管理",
            icon: "",
            type: 2,
            url: "/role",
            status: 1,
          },
          {
            id: 7,
            pid: 1,
            title: "管理员管理",
            icon: "",
            type: 2,
            url: "/admin",
            status: 1,
          },
        ],
      }),
    },
  },
  setup() {
    function hasChildren(item) {
      return item.children && item.children.length;
    }

    // 处理Icon图标的名字
    function handleMenuIconName(name) {
      return name.slice(8);
    }

    return {
      hasChildren,
      handleMenuIconName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
