<template>
  <div :class="[`${prefixCls}s`]">
    <div
      class="grid grid-cols-[max-content_1fr] grid-rows-2 gap-8 p-4 border-b"
    >
      <UserAvatar :user="props.comment.user" class="row-span-2" />
      <div class="">{{ props.comment.text }}</div>
      <div class="flex gap-x-2">
        <button
          class="rounded-full w-8 h-8 flex justify-center items-center"
          :class="
            props.comment.isLike
              ? 'bg-blue text-light'
              : 'border border-solid border-blue text-blue'
          "
          @click="likeHandler({ commentId: props.comment._id })"
        >
          <Icon icon="uiw:like-o" />
        </button>
        <span>{{ props.comment.likes }}</span>
        <button class="w-20 h-8 text-blue" @click="inputVisibilityHandler">
          reply
        </button>
      </div>
    </div>
    <div class="">
      <template v-for="(item, index) in props.comment.replies" :key="index">
        <div class="flex gap-x-4 mb-4">
          <UserAvatar :user="item.user" />
          <div class="flex-1">
            <div class="mb-4">{{ item.text }}</div>
            <button
              class="rounded w-20 h-8"
              :class="
                item.isLike
                  ? 'bg-blue text-light'
                  : 'border border-solid border-blue text-blue'
              "
              @click="repliesLikeHandler({ itemIndex: item })"
            >
              {{ item.likes }}
            </button>
          </div>
        </div>
      </template>
      <input
        type="text"
        ref="replyInput"
        @keyup.enter="addToRepliesHandler"
        v-model="tempReply"
        v-if="inputVisibility"
        class="w-full border outline-none py-1 px-2 text-sm text-gray"
      />
    </div>
    <!-- 
    <div class="">
      <div class="">
        <div class="mb-4">
          <button
            class="rounded w-20 h-8"
            :class="
              comment.isLike
                ? 'bg-blue text-light'
                : 'border border-solid border-blue text-blue'
            "
            @click="likeHandler({ userId: comment.user._id })"
          >
            {{ comment.likes }}
          </button>
          <button class="w-20 h-8 text-blue" @click="inputVisibilityHandler">
            reply
          </button>
        </div>
      </div>
      <div class="">
        <template v-for="(item, index) in props.comment.replies" :key="index">
          <div class="flex gap-x-4 mb-4">
            <UserAvatar :user="item.user" />
            <div class="flex-1">
              <div class="mb-4">{{ item.text }}</div>
              <button
                class="rounded w-20 h-8"
                :class="
                  item.isLike
                    ? 'bg-blue text-light'
                    : 'border border-solid border-blue text-blue'
                "
                @click="repliesLikeHandler({ itemIndex: index })"
              >
                {{ item.likes }}
              </button>
            </div>
          </div>
        </template>
        <input
          type="text"
          ref="replyInput"
          @keyup.enter="addToRepliesHandler"
          v-model="tempReply"
          v-if="inputVisibility"
          class="w-full border outline-none py-1 px-2 text-sm text-gray"
        />
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
// import { ref } from "vue";
import { useClassName } from "@/utils";
import type { Comment } from "@discussions/models";
import UserAvatar from "@discussions/components/UserAvatar.vue";
import { Icon } from "@iconify/vue";
// // import UserInput from '@discussions/components/UserInput.vue';
import { useCommentStore } from "../stores/CommentStore";
import { ref } from "vue";
// // import UserComment from '@discussions/components/UserComment.vue';
interface Props {
  comment: Comment;
}
const props = withDefaults(defineProps<Props>(), {
  comment: () => {
    return {
      _id: "",
      createdAt: "",
      updatedAt: "",
      user: {
        _id: "",
        fName: "",
        lName: "",
        avatar: "",
      },
      text: "",
      likes: 1,
      isLike: false,
      replies: [],
    };
  },
});
// const { comment } = props;
const inputVisibility = ref(false);
const replyInput = ref();
const inputVisibilityHandler = () => {
  inputVisibility.value = !inputVisibility.value;
  if (inputVisibility.value) {
    replyInput.value;
  }
};
const tempReply = ref("");
const addToRepliesHandler = () => {
  let obj = {
    user: {
      _id: commentStore.state.user._id,
      fName: commentStore.state.user.fName,
      lName: commentStore.state.user.lName,
      avatar: commentStore.state.user.avatar,
    },
    text: tempReply.value,
    likes: 0,
    isLike: false,
  };
  // props.comment._id
  commentStore.updateCommentStore({
    commentId: props.comment._id,
    obj: { replies: [obj] },
  });
};
const commentStore = useCommentStore();
const likeHandler = async ({ commentId }: { commentId: string }) => {
  props.comment.isLike = !props.comment.isLike;
  await commentStore.updateCommentStore({
    commentId: commentId,
    obj: {
      isLike: props.comment.isLike,
      likes: props.comment.isLike
        ? props.comment.likes + 1
        : props.comment.likes - 1,
    },
  });
};
const repliesLikeHandler = ({ itemIndex }: { itemIndex: any }) => {};
const prefixCls = useClassName({ name: "user-discussion" });
</script>
<style lang="less">
@import "@/assets/less";
@prefix-cls: ~"@{namespace}-user-discussion";
.@{prefix-cls} {
  @apply p-4 border-b border-b-solid border-b-gray-200 grid gap-x-2;
  grid-template-columns: max-content 1fr;
}
</style>
