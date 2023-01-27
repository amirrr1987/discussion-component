<template>
    <div :class="[`${prefixCls}`]">
        <UserAvatar :user="props.user" />
        <input type="text" :class="[`${prefixCls}__input`]" :placeholder="props.placeholder" :value="props.modelValue" @input="updateValue">
    </div>

</template>

<script setup lang="ts">
import type { IUser } from '@/models';
import { useClassName } from '@/utils';
import { computed, onMounted } from 'vue';
import UserAvatar from './UserAvatar.vue';


interface Props {
    modelValue: any
    user: any
    placeholder: string
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    placeholder: '',
    user: {
        name: '',
        avatar: ''
    }
})
const emits = defineEmits(['update:modelValue'])

const updateValue = (event: any) => {
    emits('update:modelValue', event.target.value) // previously was `this.$emit('input', title)`
}



const prefixCls = useClassName({ name: 'user-input' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-user-input';

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