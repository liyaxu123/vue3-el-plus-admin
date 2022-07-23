<template>
  <div class="search">
    <el-tooltip effect="dark" content="搜索菜单" placement="bottom">
      <el-icon><Search /></el-icon>
    </el-tooltip>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";

.search {
  cursor: pointer;
  width: 38px;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* background-color: #f6f6f6; */
    /* 使用 scss 的混入 */
    @include hover_bg_color();
  }
}
</style>
