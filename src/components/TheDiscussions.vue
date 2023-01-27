<template>
    <div :class="[`${prefixCls}`]">
        <div class="" :class="[`${prefixCls}__input`]">
            <img class="rounded-full w-10 h-10" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                title="" alt="" />
            <input type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Start a disscussion">
        </div>
        <template v-for="(item, index) in props.discussions" :key="index">
            <div class="grid grid-cols-[max-content_1fr] gap-x-4 p-4">
                <div class="flex flex-col gap-y-4 items-center">
                    <img class="w-10 h-10 rounded-full" v-if="item.user.avatar" :src="item.user.avatar" alt="" />
                    <span class="flex-1 bg-[#EEF2F5] w-2.5px"></span>
                </div>
                <div class="">
                    <div class="flex gap-x-2 items-center">
                        <span class="text-[#282A2F] font-medium">{{ item.user.name }}</span>
                        <span class="text-[#A3ABC1] text-sm">{{ getDateDusration({ timeStamp: item.date })
                        }}</span>
                    </div>
                    <div class="text-[#5E6770] text-sm leading-6 font-normal mb-2">
                        {{ item.text }}
                    </div>
                    <div class="flex gap-x-2">
                        <button type="button" class="text-sm font-medium flex items-center gap-x-2 w-20 h-10 bg-[#F4F5FA]">
                            <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                                </path>
                            </svg>
                            <span>2</span>
                        </button>
                    </div>
                    <div class="">
                        <template v-for="single in item.replies">
                            <div class="flex gap-x-2 items-center">
                                <span class="text-[#282A2F] font-medium">{{ single.user.name }}</span>
                                <span class="text-[#A3ABC1] text-sm">
                                    {{ getDateDusration({ timeStamp: single.date })}}
                                </span>
                            </div>
                            <div class="text-[#5E6770] text-sm leading-6 font-normal mb-2">
                                {{ single.text }}
                            </div>
                            <div class="flex gap-x-2">
                                <BaseBtn :likeIt="single.iLikedIt">
                                    <IconLike class="block" />
                                    {{ single.likes }}
                                </BaseBtn>
                                <BaseBtn>
                                    replay
                                </BaseBtn>
                            </div>
                        </template>
                        <input type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { useClassName } from '@/utils';
import type { IDiscussion } from '@/models';
import { reactive } from "vue";
const discussions: IDiscussion[] = reactive();
const prefixCls = useClassName({ name: 'the-discussions' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-the-discussions';
.@{prefix-cls} {
}
</style>