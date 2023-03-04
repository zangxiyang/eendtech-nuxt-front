<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com"/>
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
    <Link href="https://fonts.googleapis.com/css2?family=Audiowide&family=ZCOOL+QingKe+HuangYou&display=swap" rel="stylesheet"/>
    <Title>{{title}}</Title>
  </Head>
  <div id="eendtech-app">
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
import {useBaseConfigStore} from "~/composables/store/base";
import {storeToRefs} from "pinia";

const baseConfigStore = useBaseConfigStore();
const {title} = storeToRefs(baseConfigStore);
setTimeout(()=> {
  title.value = "测试更新标题"
}, 1000)
</script>
