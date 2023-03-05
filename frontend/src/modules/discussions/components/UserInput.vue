<template>
  <div :class="[`${prefixCls}`]">
    <UserAvatar :user="props.user" />
    <input
      type="text"
      :class="[`${prefixCls}__input`]"
      ref="props.ref"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="updateValue"
      @keyup.enter="submitHandler"
      autofocus
    />
  </div>
</template>
<script setup lang="ts">
import { useClassName } from "@/utils";
import type { User } from "../models";
import UserAvatar from "./UserAvatar.vue";
interface Props {
  modelValue: any;
  user: User;
  placeholder: string;
  ref: any;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "",
  user: () => {
    return {
      _id: "",
      fName: "",
      lName: "",
      avatar: "",
    };
  },
  ref: null,
});
const emits = defineEmits(["update:modelValue", "submit"]);
const updateValue = (event: any) => {
  emits("update:modelValue", event.target.value);
};
const submitHandler = (event: any) => {
  emits("submit");
  event.target.value = "";
};
const prefixCls = useClassName({ name: "user-input" });
</script>
<style lang="less">
@import "@/assets/less";
@prefix-cls: ~"@{namespace}-user-input";

.@{prefix-cls} {
  @apply flex gap-x-2 items-center;

  &__input {
    @apply block w-full p-2 text-gray-900 border border-solid border-gray-300 rounded bg-gray-50 sm: text-xs focus:ring-blue-500 focus:border-blue-500;
  }

  &__image {
    @apply w-10 h-10 rounded-full;
  }

  &__no-image {
    @apply w-10 h-10 rounded-full bg-[#DEEDFC] text-[#135CA0] font-semibold flex justify-center items-center;
  }
}
</style>
