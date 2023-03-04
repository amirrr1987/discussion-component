<template>
  <div :class="[`${prefixCls}`]">
    <MDiscussions :class="[`${prefixCls}__discussions`]" />
  </div>
</template>
<script setup lang="ts">
import MDiscussions from "@discussions/Index.vue";
import { useClassName } from "@/utils";
const prefixCls = useClassName({ name: "the-discussions" });
</script>
<style lang="less">
@import "@/assets/less";
@prefix-cls: ~"@{namespace}-the-discussions";

.@{prefix-cls} {
}
</style>
