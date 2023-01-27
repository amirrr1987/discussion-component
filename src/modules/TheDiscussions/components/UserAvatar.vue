<template>
    <div :class="[`${prefixCls}`]">
        <img v-if="props.user.avatar" :src="props.user.avatar" :class="[`${prefixCls}__image`]" title="" alt="">
        <span v-else :class="[`${prefixCls}__no-image`]">{{ userNameComputed }}</span>
    </div>
</template>
<script setup lang="ts">
import type { IUser } from '@/models';
import { useClassName } from '@/utils';
import { computed } from 'vue';
interface Props {
    user: IUser 
}
const props = withDefaults(defineProps<Props>(), {
    user: {
        name: '',
        avatar: ''
    }
})
const userNameComputed = computed(() => {
    const list = props.user.name.split(' ')
    return list[0].charAt(0) + '' + list[1].charAt(0)
})
const prefixCls = useClassName({ name: 'user-avatar' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-user-avatar';

.@{prefix-cls} {
    @apply flex gap-x-2 items-center;

    &__image {
        @apply w-10 h-10 rounded-full;
    }

    &__no-image {
        @apply w-10 h-10 rounded-full bg-[#DEEDFC] text-[#135CA0] font-semibold flex justify-center items-center;
    }
}
</style>