<template>
    <div
        class="w-full bg-gray-50 dark:bg-gray-800"
    >
        <div
            class="flex flex-col w-full md:w-5/6 mx-auto md:items-center md:justify-between md:flex-row lg:px-8"
        >
            <div class="p-4 flex flex-row items-center justify-between">
                <NuxtLink
                    class="text-lg font-semibold tracking-widest text-gray-800 uppercase rounded-lg dark:text-gray-200 focus:outline-none focus:shadow-outline"
                    to="/"
                >
                    Bug Tracker
                </NuxtLink>
                <button
                    class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                    @click="menuOpen = !menuOpen"
                >
                    <svg
                        :fill="
                            $colorMode.value == 'light'
                                ? 'bg-gray-800'
                                : '#e5e7eb'
                        "
                        viewBox="0 0 20 20"
                        class="w-6 h-6"
                    >
                        <path
                            :class="menuOpen ? 'hidden' : ''"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        ></path>
                        <path
                            :class="menuOpen ? '' : 'hidden'"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        ></path>
                    </svg>
                </button>
            </div>
            <nav
                :class="menuOpen ? '' : 'hidden'"
                class="flex flex-col flex-grow pb-4 mx-4 md:mx-0 md:pb-0 md:flex md:justify-end md:flex-row"
            >
                <Button class="mr-5" title="Login" path="/login" />
                <Button class="mr-5" title="Register" path="/register" highlight="bg-green-600" />
                <div class="relative">
                    <button
                        @click="dropdownOpen = !dropdownOpen"
                        class="flex flex-column items-center justify-center md:w-full px-4 py-2 mt-2 mx-4 md:mx-0 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 hover:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >
                        <svg
                            :fill="
                                $colorMode.value == 'light'
                                    ? 'bg-gray-800'
                                    : '#e5e7eb'
                            "
                            viewBox="0 0 20 20"
                            :class="dropdownOpen ? 'rotate-180' : 'rotate-0'"
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
                            @click="dropdownOpen = !dropdownOpen"
                            class="p-2 rounded-md shadow dark:bg-gray-800"
                            :class="dropdownOpen ? '' : 'hidden'"
                        >
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
    data: () => ({
        dropdownOpen: false,
        menuOpen: false
    })
})
</script>

<style>
</style>
