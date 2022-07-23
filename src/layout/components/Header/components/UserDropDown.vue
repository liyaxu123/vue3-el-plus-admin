<template>
  <div class="userDropDown">
    <el-dropdown trigger="click" @command="handleCommand">
      <!-- 用户名 -->
      <span class="el-dropdown-link">
        admin
        <el-icon>
          <arrow-down />
        </el-icon>
      </span>

      <!-- 菜单项 -->
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="UserFilled" command="userInfo"
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item icon="SwitchButton" command="logout"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const roter = useRouter();

function handleCommand(val) {
  console.log(val);
  if (val === "logout") {
    store.commit("logout");
    roter.push("/login");
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";

.userDropDown {
  cursor: pointer;
  width: 80px;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    @include hover_bg_color();
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
}
</style>
