<template>
    <div :class="[`${prefixCls}`]">
        <div class="flex flex-col items-center gap-y-4">
            <UserAvatar :user="props.discussion.user" />
            <span class="bg-gray-200 w-px flex-1"></span>
        </div>
        <div class="">
            <UserComment :userDetail="props.discussion" hasReply @likeHandler=""
                @replyHandler="inputVisibilityHandler" />
            <div class="">
                <template v-for="single in props.discussion.replies">
                    <div>
                        <div class="grid grid-cols-[max-content_1fr] gap-x-4">
                            <UserAvatar :user="single.user" />
                            <UserComment :userDetail="single" @likeHandler="" @replyHandler="" />

                        </div>
                    </div>
                </template>
                <UserInput class="mt-2" v-model:modelValue="userCommentTemp" placeholder="Reply" :user="props.discussion.user"
                    v-if="inputVisibility" @submit="addToRepliesHandler" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useClassName, getDateDuration, toTimestamp } from '@/utils';
import type { IDiscussion } from '@/models/index'
import UserInput from '@/modules/TheDiscussions/components/UserInput.vue';
import UserAvatar from '@/modules/TheDiscussions/components/UserAvatar.vue';
import UserComment from '@/modules/TheDiscussions/components/UserComment.vue';
interface Props {
    discussion: IDiscussion
}
const props = withDefaults(defineProps<Props>(), {
    discussion: {
        id: 1,
        date: 1657430563239,
        user: {
            name: "",
            avatar: ""
        },
        text: "",
        likes: 1,
        iLikedIt: false,
        replies: []
    }
})
// const person = reactive({
//     user: {
//         name: "Bessie Cooper",
//         avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
//     },
//     text: ""
// })
const inputVisibility = ref(false)
const inputVisibilityHandler = () => {
    inputVisibility.value = !inputVisibility.value
}
const userCommentTemp = ref('')

const addToRepliesHandler = () => {
    let obj = {
        id: props.discussion.id,
        date: toTimestamp(),
        user: {
            name: props.discussion.user.name,
            avatar: props.discussion.user.avatar
        },
        text: userCommentTemp.value,
        likes: 0,
        iLikedIt: false,
    }
    if (userCommentTemp.value.length > 0) {
        
        props.discussion.replies.push(obj)
        userCommentTemp.value = ''
    }
}
const prefixCls = useClassName({ name: 'user-discussion' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-user-discussion';

.@{prefix-cls} {
    // @apply grid gap-x-4 border-b border-b-solid border-b-gray-200 p-4;
    // grid-template-columns: max-content 1fr;
    @apply p-4 border-b border-b-solid border-b-gray-200 grid gap-x-4;
    grid-template-columns: max-content 1fr;
}
</style>