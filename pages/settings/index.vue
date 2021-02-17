<template>
    <div class="w-5/6 px-60 mx-auto mt-6">
        <h1 class="text-xl pb-1 mb-4 w-full border-b border-gray-500 dark:border-gray-300">Settings</h1>
        <div class="w-full p-5 md:px-10 md:py-5 rounded-xl border border-gray-600 dark:border-gray-300 mb-4">
            <h3 class="text-lg pb-1 mb-4 underline">Your Account</h3>
            <div class="flex flex-col items-center">
                <div class="w-full flex items-center mb-3">
                    <p>Name:</p>
                    <input class="ml-5 border border-gray-400 rounded bg-transparent px-2 py-0.5 text-sm text-gray-200 focus:outline-none focus:shadow-outline" type="text" value="Herbie Vine" />
                </div>
                <div class="w-full flex  items-center mb-3">
                    <p>Email:</p>
                    <input class="ml-5 border border-gray-400 rounded bg-transparent px-2 py-0.5 text-sm text-gray-200 focus:outline-none focus:shadow-outline" type="text" value="vineherbie@gmail.com" />
                </div>
            </div>
        </div>
        <div class="w-full p-5 md:px-10 md:py-5 rounded-xl border border-gray-600 dark:border-gray-300">
            <h3 class="text-lg pb-1 mb-4 underline">Appearance</h3>
            <CheckSwitch
                v-if="darkMode != null"
                :checked="darkMode"
                @switch-change="toggle"
                :label="darkModeLabel"
            />
        </div>
    </div>
</template>

<script>
import Vue from  'vue'
import CheckSwitch from '~/components/CheckSwitch.vue'

export default Vue.extend({
    name: 'Settings',
    components: {
        CheckSwitch
    },
    data: () => ({
        currentMode: null
    }),
    computed: {
        darkMode() {
            return this.$colorMode.value == "dark"
        },
        darkModeLabel() {
            return `Currently set to ${this.$colorMode.value}`
        }
    },
    methods: {
        toggle() {
            this.$colorMode.preference = this.$colorMode.value == "light" ? "dark" : "light"
            this.darkMode = this.$colorMode.value == "light"
        }
    }
})
</script>

<style>
</style>