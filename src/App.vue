<template>
  <div :class="[`${prefixCls}`]">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useClassName } from '@/utils';

const prefixCls = useClassName({ name: 'the-app' })
</script>
<style lang="less">
@import '@/assets/less';

@prefix-cls: ~'@{namespace}-the-app';

.@{prefix-cls} {}
</style>