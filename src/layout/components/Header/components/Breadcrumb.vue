<template>
  <el-breadcrumb separator="/">
    <transition-group appear name="breadcrumb">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{
        item
      }}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbList = computed(() => route.meta.breadcrumb);
</script>

<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.4s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
