<template>
    <div :class="[`${prefixCls}`]">
        <div class="" :class="[`${prefixCls}__input`]">
            <img class="rounded-full w-10 h-10" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                title="" alt="" />
            <input type="text" class="border border-solid flex-1 p-1 h-10" placeholder="Start a disscussion">
        </div>
        <template v-for="(item, index) in props.discussions" :key="index">
            <TheDiscussion :discussion="item" />

        </template>
    </div>
</template>
<script setup lang="ts">
import type { IDiscussion } from '@/models'
import TheDiscussion from "@/components/TheDiscussions/TheDiscussion.vue";
import { useClassName } from '@/utils';
interface Props {
    discussions: IDiscussion[]
}
const props = withDefaults(defineProps<Props>(), {
    discussions: [
        {
            id: 2,
            date: 1672232414000,
            user: {
                name: "Marvin McKinney",
                avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            },
            text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
            likes: 2,
            iLikedIt: false,
            replies: []
        }
    ]
})
const prefixCls = useClassName({ name: 'the-discussions' })
</script>
<style lang="less">
@import '@/assets/less';

@prefix-cls: ~'@{namespace}-the-discussions';

.@{prefix-cls} {
    // @apply bg-[#E9EDF1];

    &__input {
        @apply p-4 flex items-center gap-x-4 rounded-t bg-[#FAFBFC] border-b border-b-solid border-b-[#E9EDF1];
    }
}
</style>