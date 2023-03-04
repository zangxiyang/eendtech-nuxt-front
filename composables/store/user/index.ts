import {defineStore} from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            // 用户名
            userName: '',
            // 用户昵称
            userNick: '',
            // 角色id
            roleId: -1,
            // 角色名称
            roleName: ''
        }
    }
})
