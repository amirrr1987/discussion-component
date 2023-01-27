<template>
    <div :class="[`${prefixCls}`]">
        <div :class="[`${prefixCls}__user-comment`]">
            <UserInput v-model:modelValue="user.text" :user="user" placeholder="Start a discussion" />
        </div>
        <div class="grid gap-8">
            <template v-for="item in discussions">
                <div class="grid grid-cols-[max-content_1fr] gap-x-4 border-b border-b-solid border-b-gray-200 p-4 ">
                    <div class="flex flex-col items-center gap-y-4">
                        <UserAvatar :user="item.user" />
                        <span class="bg-gray-200 w-px flex-1"></span>
                    </div>
                    <div class="">
                        <div class="flex gap-x-4 mb-2">
                            <span>{{ item.user.name }}</span>
                            <span class="text-gray-400">{{ getDateDusration({ timeStamp: item.date }) }}</span>
                        </div>
                        <div class="mb-2 text-gray-500">
                            {{ item.text }}
                        </div>
                        <div class="">
                            <button type="button" class="w-19 h-9 rounded-full"
                                :class="item.iLikedIt ? 'bg-blue text-white' : 'bg-gray-200'">
                                {{ item.likes }}
                            </button>
                            <button class="w-19 h-9 text-blue">
                                Reply
                            </button>
                        </div>
                        <div class="">
                            <template v-for="single in item.replies">
                                <div>
                                    <div class="grid grid-cols-[max-content_1fr] gap-x-4">
                                        <UserAvatar :user="single.user" />
                                        <div class="">
                                            <div class="flex gap-x-2 items-cente mb-2">
                                                <div class="">{{ single.user.name }}</div>
                                                <div class="">{{ getDateDusration({ timeStamp: single.date }) }}</div>
                                            </div>
                                            <div class="mb-2 text-gray-500">{{ single.text }}</div>
                                            <div class="">
                                                <button type="button" class="w-19 h-9 rounded-full"
                                                    :class="single.iLikedIt ? 'bg-blue text-white' : 'bg-gray-200'">
                                                    {{ single.likes }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <UserInput  class="mt-2" v-model:modelValue="user.text" placeholder="Reply" :user="user" />
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useClassName, getDateDusration, getDiscussionsApi } from '@/utils';
import { onMounted, reactive, ref } from 'vue';
import type { IDiscussion } from '@/models/index'
import UserInput from './components/UserInput.vue';
import UserAvatar from './components/UserAvatar.vue';
const discussions = reactive<IDiscussion[]>([])
onMounted(async () => {
    const data = await getDiscussionsApi()
    Object.assign(discussions, data)
    // discussions.forEach((item)=>{
    //     item.state = false
    // })
})
const user = reactive({
    user: {
        name: "Bessie Cooper",
        avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
    },
    text: ""
})
const prefixCls = useClassName({ name: 'the-discussions' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-the-discussions';
.@{prefix-cls} {
    &__user-comment {
        @apply bg-[#FAFBFC] py-8 border-b border-b-solid border-b-gray px-4;
    }
}
</style>