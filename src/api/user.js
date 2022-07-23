// 专门出来用户相关的网络请求
import request from "@/utils/request";

/**
 * @description: 用户登录
 */
export function login(data) {
  return request({
    method: "post",
    url: "/api/userlogin",
    data,
  });
}

/**
 * @description: 验证登录
 */
export function test(data) {
  return request({
    method: "get",
    url: "/api/test",
    data,
  });
}

/**
 * @description: 获取菜单列表
 */
export function getMenuList() {
  return request({
    method: "post",
    url: "/api/menu/list",
  });
}
