<template>
    <div :class="[`${prefixCls}`]">
        <div :class="[`${prefixCls}__user-comment`]">
            <UserInput v-model:modelValue="person.text" :user="person.user" placeholder="Start a discussion"
                @submit="userSubmitHandler" />
        </div>
        <div class="grid gap-8">
            <template v-for="(item, index) in discussions" :key="index">
                <UserDiscussion :discussion="item" />
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useClassName, getDiscussionsApi, updateDiscussionsApi } from '@/utils';
import { onMounted, reactive } from 'vue';
import type { IDiscussion } from '@/models/index'
import UserInput from './components/UserInput.vue';
import UserDiscussion from './components/UserDiscussion.vue';

const discussions = reactive<IDiscussion[]>([])

const getDiscussions = async() => {
    const data = await getDiscussionsApi()
    Object.assign(discussions, data)
}
onMounted(async () => {
    await getDiscussions()

})
const person = reactive({
    user: {
        name: "Bessie Cooper",
        avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
    },
    text: ""
})

const userSubmitHandler = async() => {
    await updateDiscussionsApi({ userDiscussion: person })
    await getDiscussions()
}
const prefixCls = useClassName({ name: 'the-discussions' })
</script>
<style lang="less">
@import '@/assets/less';
@prefix-cls: ~'@{namespace}-the-discussions';

.@{prefix-cls} {
    &__user-comment {
        @apply bg-[#FAFBFC] py-8 border-b border-b-solid border-b-gray px-4;
    }
}
</style>