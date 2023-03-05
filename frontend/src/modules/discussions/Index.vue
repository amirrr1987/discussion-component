<template>
  <div :class="[`${prefixCls}`]">
    <div :class="[`${prefixCls}__user-comment`]">
      <UserInput
        v-model:modelValue="userTextTemp"
        ref=""
        :user="discussionStore.state.user"
        placeholder="Start a discussion"
        @submit="userSubmitHandler"
      />
    </div>
    <div class="grid gap-8">
      <template
        v-for="(comment, index) in discussionStore.state.comments"
        :key="index"
      >
        <UserDiscussion :comment="comment" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useClassName } from "@/utils";
import { onMounted, reactive, ref } from "vue";
import UserInput from "./components/UserInput.vue";
import UserDiscussion from "./components/UserDiscussion.vue";
import { useDiscussionStore } from "@discussions/stores/DiscussionStore";
const discussionStore = useDiscussionStore();
const userTextTemp = ref("");
const userSubmitHandler = () => {
  // discussionStore.pushToComments({ userComment: userTextTemp.value });
};

onMounted(async () => {
  console.log("onMounted");
  
  await discussionStore.getUserStore({phone: "09198881400",password: "09198881400"});
  await discussionStore.getCommentsStore();
});
const prefixCls = useClassName({ name: "the-discussions" });
</script>
<style lang="less">
@import "@/assets/less";
@prefix-cls: ~"@{namespace}-the-discussions";
.@{prefix-cls} {
  &__user-comment {
    @apply bg-[#FAFBFC] py-8 border-b border-b-solid border-b-gray px-4;
  }
}
</style>
