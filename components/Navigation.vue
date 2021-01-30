<template>
    <div
        class="w-full bg-gray-50 dark:bg-gray-800"
    >
        <div
            class="flex flex-col w-5/6 px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
            <div class="p-4 flex flex-row items-center justify-between">
                <NuxtLink
                    class="no-active text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-gray-200 focus:outline-none focus:shadow-outline"
                    to="/"
                >
                    Bug Tracker
                </NuxtLink>
                <button
                    class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                    @click="open = !open"
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="w-6 h-6"
                    >
                        <path
                            :class="open ? 'hidden' : ''"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        ></path>
                        <path
                            :class="open ? '' : 'hidden'"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        ></path>
                    </svg>
                </button>
            </div>
            <nav
                :class="open ? 'flex' : ''"
                class="flex flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"
            >
                <Button title="About" path="/about" />
                <div class="relative">
                    <button
                        @click="open = !open"
                        class="flex flex-column items-center justify-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:hover:text-white dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            :class="open ? 'rotate-180' : 'rotate-0'"
                            class="inline w-4 h-4 mt-1 transition-transform duration-200 transform md:-mt-1"
                        >
                            <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            ></path>
                        </svg>
                    </button>
                    <div
                        class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-md md:w-48"
                    >
                        <div
                            class="px-2 py-2 rounded-md shadow dark:bg-gray-800"
                            :class="open ? '' : 'hidden'"
                        >
                            <Button title="User" path="/user" icon="user" />
                            <Button title="Settings" path="/settings" icon="cog" />
                            <Button title="Logout" path="/settings" icon="sign-out-alt" highlight="bg-red-400" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/Button.vue' 

export default Vue.extend({
    name: 'Navigation',
    components: {
        Button
    },
    data() {
        return {
            open: false
        }
    }
})
</script>

<style>
.light .nav {
    @apply w-full bg-gray-50
}

.dark .nav {
    @apply bg-gray-800
}

.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
.dark-mode .badge {
  @apply bg-gray-700 text-gray-200;
}
</style>
