import {defineStore} from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            // 用户名
            userName: 'testName',
            // 用户昵称
            userNick: '测试昵称',
            // 角色id
            roleId: -1,
            // 角色名称
            roleName: '',
            // 是否登录
            isLogin: true,
            avatar: '',
            // 性别
            sex: 3,
        }
    },
    persist: true
})
