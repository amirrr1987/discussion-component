<template>
    <div :class="[`${prefixCls}`]">
        <div :class="[`${prefixCls}__container`]">
            <TheDiscussions />
        </div>
    </div>
</template>
<script setup lang="ts">
import TheDiscussions from '@discussions/';
import { useClassName } from '@/utils';
const prefixCls = useClassName({ name: 'the-discussions' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-the-discussions';

.@{prefix-cls} {
    &__container {
        @apply container mx-auto px-4;
    }
}
</style>