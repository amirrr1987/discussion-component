<template>
    <div :class="[`${prefixCls}`]">
        <UserAvatar :user="comment.user" />
        <div class="">
            <div class="mb-4">{{ comment.text }}</div>
            <div class="">

                <div class="mb-4">
                    <button class="rounded w-20 h-8" :class="comment.iLikedIt ? 'bg-blue text-light' : 'border border-solid border-blue text-blue'"
                        @click="likeHandler({ userId: comment.id })">{{ comment.likes }}</button>
                        <button class="w-20 h-8 text-blue" @click="inputVisibilityHandler">reply</button>
                </div>
            </div>
            <div class="">
                <template v-for="(item, index) in props.comment.replies" :key="index">
                    <div class="flex gap-x-4 mb-4">
                        <UserAvatar :user="item.user" />
                        <div class="flex-1">
                            <div class="mb-4">{{ item.text }}</div>
                            <button class="rounded w-20 h-8"
                                :class="item.iLikedIt ? 'bg-blue text-light' : 'border border-solid border-blue text-blue'"
                                @click="repliesLikeHandler({ itemIndex: index })">{{ item.likes }}</button>
                        </div>
                    </div>
                </template>
                <input type="text" ref="replyInput" @keyup.enter="addToRepliesHandler" v-model="tempReply" v-if="inputVisibility" class="w-full border outline-none py-1 px-2 text-sm text-gray">
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useClassName, } from '@/utils';
import type { IProps, IComment, IDiscussion, } from '@discussions/models'
// import UserInput from '@discussions/components/UserInput.vue';
import UserAvatar from '@discussions/components/UserAvatar.vue';
import { useDiscussionStore } from '../stores/DiscussionStore';
// import UserComment from '@discussions/components/UserComment.vue';

interface Props {
    comment: IDiscussion
}
const props = withDefaults(defineProps<Props>(), {
    comment: () => {
        return {
            id: 1,
            date: 1,
            user: {
                name: 'Amir Maghami',
                avatar: ''
            },
            text: '',
            likes: 1,
            iLikedIt: false,
            replies: []
        }
    }
})
const { comment } = props;

const inputVisibility = ref(false)
const replyInput = ref()
const inputVisibilityHandler = () => {
    inputVisibility.value = !inputVisibility.value
    if (inputVisibility.value) {
        replyInput.value
    }
}
const tempReply = ref('')
const addToRepliesHandler = () => {

    let obj = {
        id: comment.id,
        date: 1,
        user: {
            name: comment.user.name,
            avatar: comment.user.avatar
        },
        text: tempReply.value,
        likes: 0,
        iLikedIt: false,
    }
    if (tempReply.value.length > 0) {
        comment.replies.push(obj)
        tempReply.value = ''
    }



}
const likeHandler = ({ userId }: { userId: number }) => {
    comment.iLikedIt = comment.iLikedIt ? false : true
    comment.likes = comment.iLikedIt ? ++comment.likes : --comment.likes
}
const repliesLikeHandler = ({ itemIndex }: { itemIndex: number }) => {
    const { replies } = comment;
    replies[itemIndex].iLikedIt = replies[itemIndex].iLikedIt ? false : true
    replies[itemIndex].likes = replies[itemIndex].iLikedIt ? ++replies[itemIndex].likes : --replies[itemIndex].likes
}
const prefixCls = useClassName({ name: 'user-discussion' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-user-discussion';

.@{prefix-cls} {
    @apply p-4 border-b border-b-solid border-b-gray-200 grid gap-x-2;
    grid-template-columns: max-content 1fr;
}
</style>