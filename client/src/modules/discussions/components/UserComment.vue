<template>
  <div :class="[`${prefixCls}`]">
    <div class="flex gap-x-2 mb-2 items-center">
      <span>{{ props.userDetail.user.fName + " "  props.userDetail.user.lName}}</span>
      <!-- <span class="text-gray-400 text-sm">{{ getDateDuration({ timeStamp: props.userDetail.date }) }}</span> -->
    </div>
    <div class="mb-4 text-gray-500">
      {{ props.userDetail.text }}
    </div>
    <div class="mb-4">
      <button
        type="button"
        :class="likesClassComputed"
        class="w-19 h-8 rounded-full"
        @click="likeHandler({ likeState: props.userDetail.isLike })"
      >
        <span class="icon--thumbs-up-1 text-sm"></span>
        {{ props.userDetail.likes }}
      </button>
      <button
        class="w-19 h-9 text-blue"
        v-if="props.hasReply"
        @click="replyHandler"
      >
        Reply
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useClassName } from "@/utils";
import type { Comment } from "@discussions/models";
import { computed } from "vue";

interface Props {
  userDetail: Comment;
  hasReply?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  userDetail: () => {
    return {
      _id: "",
      createdAt: "",
      updatedAt: "",
      user: {
        _id: '',
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
  hasReply: false,
});
const emits = defineEmits(["likeHandler", "replyHandler"]);
const likeHandler = ({ likeState }: { likeState: boolean }) => {
  if (likeState) {
    props.userDetail.likes -= 1;
    props.userDetail.isLike = false;
  }
  if (!likeState) {
    props.userDetail.likes += 1;
    props.userDetail.isLike = true;
  }
  emits("likeHandler");
};
const replyHandler = () => {
  emits("replyHandler");
};
const likesClassComputed = computed(() => {
  if (props.userDetail.isLike) {
    return "bg-blue-500 text-white";
  } else {
    return "bg-gray-200";
  }
});
const prefixCls = useClassName({ name: "user-comment" });
</script>
<style lang="less">
@import "@/assets/less";
@import "@/modules/TheDiscussions/assets/css/icon.css";

@prefix-cls: ~"@{namespace}-user-comment";

.@{prefix-cls} {
  // @apply text-xs;
}
</style>
