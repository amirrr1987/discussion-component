<template>
    <div class="grid grid-cols-[max-content_1fr] gap-x-4 p-4">


        <div class="flex flex-col gap-y-4 items-center">
            <img class="w-10 h-10 rounded-full" v-if="discussion.user.avatar" :src="discussion.user.avatar" alt="" />
            <span class="flex-1 bg-[#EEF2F5] w-1"></span>
        </div>

        <div class="">
            <div class="flex gap-x-1">
                <span class="text-[#282A2F] font-medium">{{ discussion.user.name }}</span>
                <span class="text-[#A3ABC1]">{{ discussion.date }}</span>
            </div>
            <div class="">
                {{ discussion.text }}
            </div>
            <div class="flex gap-x-2">
                <button class="bg-[#F4F5FA] w-24 h-10 rounded-full" :class="discussion.iLikedIt ? 'bg-[#235EE7] text-white' : ''">
                    {{ discussion.likes }}
                </button>
                <button class="text-[#235EE7] font-medium w-24 h-10 rounded-full">
                    Replay
                </button>
            </div>
            <!-- <div class="">{{ discussion.likes }}</div>
            <div class="">{{ discussion.iLikedIt }}</div> -->
            <div class="">
                <template v-for="single in discussion.replies">
                    <div> {{ single.id }} </div>
                    <div> {{ single.date }} </div>
                    <div> {{ single.user.avatar }} </div>
                    <div> {{ single.user.name }} </div>
                    <div> {{ single.text }} </div>
                    <div> {{ single.likes }} </div>
                    <div> {{ single.iLikedIt }} </div>
                </template>
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">
import type { IDiscussion } from '@/models'
import { useClassName } from '@/utils';
interface Props {
    discussion: IDiscussion
}
const props = withDefaults(defineProps<Props>(), {
    discussion: {
        id: 2,
        date: 1672232414000,
        user: {
            name: "Marvin McKinney",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        },
        text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
        likes: 2,
        iLikedIt: false,
        replies: []
    }
})
const { discussion } = props

const prefixCls = useClassName({ name: 'the-discussion' })
</script>
<style lang="less">
@import '@/assets/less';

@prefix-cls: ~'@{namespace}-the-discussion';

.@{prefix-cls} {
    @apply bg-[#E9EDF1];

    &__input {
        @apply p-4 flex items-center gap-x-4 rounded-t bg-[#FAFBFC] border-b border-b-solid border-b-[#E9EDF1];
    }
}
</style>