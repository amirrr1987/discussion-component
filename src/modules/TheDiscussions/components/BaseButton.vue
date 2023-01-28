<template>
    <button :class="[`${prefixCls}`]" @click="">
        <slot></slot>
    </button>

    <button :class="[`${prefixCls}`]">
        <slot></slot>

    </button>

    <button :class="[`${prefixCls}`]">
        <slot></slot>

    </button>

</template>
<script setup lang="ts">import { useClassName } from '@/utils';



interface Props {
    isLike: false
    isText: false

}
const props = withDefaults(defineProps<Props>(), {

})

const emits = defineEmits(['likeHandler', 'replyHandler'])

const likeHandler = () => {
    emits('likeHandler')
}

const replyHandler = () => {
    emits('replyHandler')
}
const prefixCls = useClassName({ name: 'base-button' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-base-button';

.@{prefix-cls} {
    @apply w-19 h-9 rounded-full
}
</style>