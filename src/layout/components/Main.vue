<template>
  <el-scrollbar>
    <!-- 视图区域 -->
    <div class="view_container">
      <router-view v-slot="{ Component }">
        <!-- 
          enter-active-class="animate__animated animate__fadeInDown"
          leave-active-class="animate__animated animate__fadeOutDown"
          :duration="{ enter: 400, leave: 400 }"
        -->
        <transition
          name="fade-transform"
          mode="out-in"
          :duration="{ enter: 400, leave: 400 }"
          appear
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </el-scrollbar>
</template>

<script setup></script>

<style lang="scss">
.view_container {
  padding: 12px;
}

/* 修改滚动条的宽度 */
/* .el-scrollbar__bar.is-vertical {
  width: 20px;
} */

/* 修改滚动条颜色 */
.el-scrollbar__thumb {
  background: #046cfd;
}

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
