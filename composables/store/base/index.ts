import {defineStore} from "pinia";

export const useBaseConfigStore = defineStore("baseConfig", {
    state: () => {
        return {
            title: '测试标题'
        }
    }
})
