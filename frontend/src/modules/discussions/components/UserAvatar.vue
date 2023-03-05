<template>
  <img
    v-if="props.user.avatar.length > 0"
    :src="props.user.avatar"
    :class="[`${prefixCls}__image`]"
    title=""
    alt=""
  />
  <span v-else :class="[`${prefixCls}__no-image`]">{{ userNameComputed }}</span>
</template>
<script setup lang="ts">
import { useClassName } from "@/utils";
import { computed } from "vue";
import type { User } from "../models";
interface Props {
  user: User;
}
const props = withDefaults(defineProps<Props>(), {
  user: () => {
    return {
      _id: "",
      fName: "",
      lName: "",
      avatar: "",
    };
  },
});
const userNameComputed = computed(() => {

    console.log(props.user);
    

    // return name.split(' ').map((x: string) => x.charAt(0)).join('').substr(0, 2).toUpperCase()
    const fChar = props.user.fName.charAt(0);
    const lChar = props.user.lName.charAt(0);
    console.log(fChar, lChar);

    return `${fChar + lChar}`;
  
});
const prefixCls = useClassName({ name: "user-avatar" });
</script>
<style lang="less">
@import "@/assets/less";
@prefix-cls: ~"@{namespace}-user-avatar";
.@{prefix-cls} {
  &__image {
    @apply h-10 rounded-full;
    aspect-ratio: 1 / 1;
  }
  &__no-image {
    @apply h-10 rounded-full bg-[#DEEDFC] text-[#135CA0] font-semibold flex justify-center items-center;
    aspect-ratio: 1 / 1;
  }
}
</style>
