<template>
    <button :class="[`${prefixCls}`]" class="">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
import { useClassName } from '@/utils';
import { computed } from 'vue';

interface Props {
    likeIt: boolean
}
const props = withDefaults(defineProps<Props>(), {
    likeIt: false,

})


const btnClassComputed = computed(() => {
    let style;

    if (props.likeIt) {
        style = 'text-[#235EE7] '
    }

    return style
})

const prefixCls = useClassName({ name: 'base-btn' })

</script>
<style lang="less">
@import '@/assets/less';

@prefix-cls: ~'@{namespace}-base-btn';

.@{prefix-cls} {
    @apply text-white bg-blue-700 hover: bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
</style>