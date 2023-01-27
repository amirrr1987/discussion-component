<template>
    <div class="grid grid-cols-[max-content_1fr] gap-x-4 p-4">


        <div class="flex flex-col gap-y-4 items-center">
            <img class="w-10 h-10 rounded-full" v-if="discussion.user.avatar" :src="discussion.user.avatar" alt="" />
            <span class="flex-1 bg-[#EEF2F5] w-2.5px"></span>
        </div>

        <div class="">
            <div class="flex gap-x-2 items-center">
                <span class="text-[#282A2F] font-medium">{{ discussion.user.name }}</span>
                <span class="text-[#A3ABC1] text-sm">{{ getDateDusration({ timeStamp: discussion.date }) }}</span>
            </div>
            <div class="text-[#5E6770] text-sm leading-6 font-normal mb-2">
                {{ discussion.text }}
            </div>
            <div class="flex gap-x-2">

                <BaseBtn :likeIt="discussion.iLikedIt">
                    <IconLike class="block" />
                    {{ discussion.likes }}
                </BaseBtn>

                <BaseBtn>
                    replay
                </BaseBtn>
            </div>
            <div class="">
                <template v-for="single in discussion.replies">
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
                    <!-- <div> {{ single.id }} </div>
                    <div> {{ single.date }} </div>
                    <div> {{ single.user.avatar }} </div>
                    <div> {{ single.user.name }} </div>
                    <div> {{ single.text }} </div>
                    <div> {{ single.likes }} </div>
                    <div> {{ single.iLikedIt }} </div> -->
                </template>
                
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">
import type { IDiscussion } from '@/models'
import { useClassName, getDateDusration } from '@/utils';
import BaseBtn from '@/components/TheDiscussions/BaseBtn.vue';
import Iconlike from '@/components/TheDiscussions/Iconlike.vue';
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