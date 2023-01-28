<template>
    <div :class="[`${prefixCls}`]">
        <img v-if="props.user.avatar" :src="props.user.avatar" :class="[`${prefixCls}__image`]" title="" alt="">
        <span v-else :class="[`${prefixCls}__no-image`]">{{ userNameComputed }}</span>
    </div>
</template>
<script setup lang="ts">
import { useClassName } from '@/utils';
import { computed } from 'vue';
interface Props {
    user: any
}
const props = withDefaults(defineProps<Props>(), {
    user: {
        name: '',
        avatar: ''
    }
})
const userNameComputed = computed(() => {
    const { name } = props.user
    if (name) {
        return name.split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase()
    }
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