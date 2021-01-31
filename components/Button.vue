<template>
    <NuxtLink
        class="flex flex-row justify-start items-center px-4 py-2 text-sm font-semibold bg-transparent text-gray-800 dark:text-gray-200 md:mt-0 rounded-lg dark:bg-transparent focus:outline-none focus:shadow-outline"
        :class="
            highlight 
                ? `hover:${highlight} dark:hover:${highlight}`
                : 'hover:bg-gray-200 dark:hover:bg-gray-600'
        "
        :to="path"
    >
        <fa v-if="icon" :icon="icon" class="mr-2" />
        {{ title }}
    </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Button',
    props: {
        title: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        highlight: {
            type: String,
            required: false
        }
    }
})
</script>