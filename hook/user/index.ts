/**
 * @作者: Seale
 * @时间: 2023/3/5
 * @版本: V1.0
 * @说明: 用户相关hook
 */
import {useUserStore} from "~/composables/store/user";
import {storeToRefs} from "pinia";

export const useUser = ()=>{
    const userStore = useUserStore();
    return storeToRefs(userStore);
}

export const hasRole = (roleName: string): boolean => {
    const {roleName: role} = useUser();
    return role.value === roleName;
}

export const checkLogin = (): boolean => {
    const {isLogin} = useUser();
    return isLogin.value;
}
