<template>
    <div :class="[`${prefixCls}`]">
        <div :class="[`${prefixCls}__user-comment`]">
            <!-- <UserInput v-model:modelValue="userComment" :user="discussions[0].user" /> -->
        </div>
        <template v-for="item in discussions">
            <div class="">
                <div class="">
                    <UserAvatar :user="item.user" />
                </div>
                <div class="">
                    {{ item }}
                </div>
            </div>
        </template>
    </div>

</template>
<script setup lang="ts">
import { useClassName, getDateDusration, getDiscussionsApi } from '@/utils';
import { onMounted, reactive, ref } from 'vue';
import type { IDiscussion } from '@/models/index'
import UserInput from './components/UserInput.vue';
import UserAvatar from './components/UserAvatar.vue';

const discussions = reactive<IDiscussion[]>([])
onMounted(async () => {
    const data = await getDiscussionsApi()
    Object.assign(discussions, data)
})

const userComment = ref('')

const prefixCls = useClassName({ name: 'the-discussions' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-the-discussions';

.@{prefix-cls} {

    &__user-comment {
        @apply bg-[#FAFBFC] py-8 px-7 border-b border-b-solid border-b-gray;
    }
}
</style>