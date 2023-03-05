<template>
  <nav class="eend-header w-full">
    <div class="navbar fixed top-0 left-0 right-0 border-b border-gray-300 bg-white z-50">
      <div class="navbar-container relative flex w-full h-24 min-h-24 max-h-24 box-border z-50">
        <div class="eend-nav-left h-24 flex items-center">
          <div class="more-apps pl-7 pr-7 relative">
            <a-button type="text" style="color: #676767" size="small" @click="moreAppClick">
              <template #icon>
                <icon-apps :style="{fontSize: '24px'}"/>
              </template>
            </a-button>
          </div>
          <div class="logo ml-7 select-none" title="极束科技">
            <router-link to="/" class="flex items-center">
              <img src="@/assets/img/logo.png" alt="LOGO" style="height: 30px; width: auto">
              <span class="logo-text text-4xl ml-2">Eend.Tech</span>
            </router-link>
          </div>

        </div>
        <div class="eend-nav-right h-24 flex flex-1 items-center justify-between pr-7">
          <div class="w-8/12">
            <nuxt-link class="ml-6 h-full inline-flex" v-for="item in navBarConfig" :key="item.title" :to="item.link">
              <a-button size="small" type="text" style="color: #676767">
                {{ item.title }}
              </a-button>
            </nuxt-link>
          </div>
          <div class="w-3/12 flex justify-end items-center">
            <template v-if="checkLogin()">
              <a-popover trigger="hover">
                <a-avatar class="cursor-pointer">
                  <img
                      alt="avatar"
                      :src="avatar"
                      v-if="avatar"
                  />
                  <icon-user v-else/>
                </a-avatar>
                <template #content>
                  <div class="user-pop-container w-300">
                    <header class="header">
                      <!--头像-->
                      <div class="flex justify-center items-center">
                        <a-avatar :size="72">
                          <template #trigger-icon>
                            <template v-if="sex === 2">
                              <icon-woman style="color: deeppink"/>
                            </template>
                            <template v-else>
                              <icon-man style="color: cornflowerblue"/>
                            </template>
                          </template>
                          <template v-if="avatar">
                            <img alt="avatar" :src="avatar"/>
                          </template>
                          <template v-else>
                            <icon-user/>
                          </template>
                        </a-avatar>
                      </div>
                      <div class="flex justify-center items-center mt-4">
                        <span class="userNick text-2xl">{{ userNick }}</span>
                        <a-tag size="small" class="select-none inline-flex ml-2">
                          <template #icon>
                            <icon-user/>
                          </template>
                          <span>{{ userName }}</span>
                        </a-tag>
                      </div>
                      <div class="flex justify-center items-center">

                      </div>
                    </header>
                    <main class="main-nav mt-12">
                      <div class="grid grid-cols-2 gap-1.5">
                        <a-button disabled long>
                          <template #icon>
                            <icon-ordered-list/>
                          </template>
                          我的订单
                        </a-button>
                        <a-button long>
                          <template #icon>
                            <icon-settings/>
                          </template>
                          个人中心
                        </a-button>
                      </div>
                    </main>
                    <footer class="mt-10 flex f-row-reverse">
                      <a-button type="text" style="color: #f20d0d">
                        <template #icon>
                          <icon-import/>
                        </template>
                        安全退出
                      </a-button>
                    </footer>
                  </div>
                </template>
              </a-popover>
            </template>
            <template v-else>
              <span class="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors">登录</span>
              <span class="select-none ml-2 mr-2">/</span>
              <span class="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors">注册</span>
            </template>

          </div>
        </div>
      </div>
      <div ref="dropDownRef"
           class="drop-down-container z-1"
           v-if="show">
        <div class="wrapper h-96 bg-white w-full">
          <div class=""></div>
        </div>
      </div>
    </div>
    <div class="mask" ref="maskRef" v-if="show" @click="navBarDropDownClose"></div>
  </nav>
</template>

<script setup lang="ts">
import {navBarConfig} from "~/components/eend-header/config";
import {Ref} from '#imports';
import {checkLogin, useUser} from "~/hook/user";

defineComponent({
  name: 'EendHeader'
});


const dropDownRef = ref();
const maskRef = ref();

const show = ref(false);


// 用户
const {userNick, avatar, sex, userName} = useUser();



const moreAppClick = async () => {
  if (show.value === false) {
    show.value = true;
    await nextTick();
    animateCss(dropDownRef, 'show animate__animated animate__slideInDown animate__delay-0.6s animate__faster');
    animateCss(maskRef, 'show animate__animated animate__fadeIn animate__faster');

  } else if (show.value === true) {
    navBarDropDownClose();
  }
}

const navBarDropDownClose = ()=>{
  animateCss(maskRef, 'animate__animated animate__fadeOut animate__faster');
  animateCss(dropDownRef, 'animate__animated animate__slideOutUp animate__faster animate__delay-0.6s', () => {
    show.value = false;
  })
}


const animateCss = (elementRef: Ref<HTMLElement>, animation: string, cb?: Function, delShow: boolean = false) => {
  const htmlNode = elementRef.value;
  animation.split(' ').forEach((value) => {
    htmlNode.classList.add(value);
  })

  function handleAnimationEnd(event: any) {
    event.stopPropagation();
    animation.split(' ').forEach(val => {
      if (val !== 'show') htmlNode.classList.remove(val);
    })
    if (cb != null) cb();
  }

  htmlNode.addEventListener('animationend', handleAnimationEnd, {once: true});
}


</script>

<style>
.eend-nav-right .router-link-active.router-link-exact-active {
  background-color: var(--color-fill-3);
  border-color: transparent;
}
</style>

<style lang="scss" scoped>
.more-apps {
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 24px;
    background-color: #cecece;
    right: 0;
    top: 49%;
    transform: translateY(-50%);
  }
}

.logo {
  font-family: 'Audiowide', cursive;
}

.drop-down-container {
  position: absolute;
  left: 0;
  top: 60px;
  width: 100%;
  display: none;
  &.show{
    display: block;
  }
  .wrapper{
    transition: all .3s cubic-bezier(.16,1,.3,1);
  }
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,.5);
  z-index: 49;
  display: none;
  &.show{
    display: block;
  }
}
</style>
