<template>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <el-tag
        v-for="(item, index) in tagList"
        :style="{ marginLeft: index ? '5px' : '0px', cursor: 'pointer' }"
        :key="item.name"
        :effect="item.path === activePath ? 'dark' : 'light'"
        :closable="!!index"
        @click="handleClick(item)"
        @close="handleClose(index)"
        >{{ item.name }}</el-tag
      >
    </div>
  </el-scrollbar>
</template>

<script setup>
import { watch, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const tagList = reactive([]);
const activePath = ref("");

watch(
  () => route,
  (to) => {
    activePath.value = to.path;
    const hasTag = tagList.find((item) => item.name === to.meta.title);
    if (!hasTag) {
      tagList.push({
        name: to.meta.title,
        path: to.path,
      });
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

function handleClick(val) {
  router.push(val.path);
}

function handleClose(idx) {
  if (idx !== 0) {
    tagList.splice(idx, 1);
    router.push(tagList[idx - 1].path);
  }
}
</script>

<style lang="scss" scoped>
.scrollbar-flex-content {
  display: flex;
}
</style>
