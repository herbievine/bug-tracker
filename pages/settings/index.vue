<template>
    <div class="settings">
        <p class="bg-blue-500 dark:bg-red-500">Settings</p>
        <button @click="toggle" class="">
            Switch to {{ $colorMode.value == "light" ? "dark" : "light" }}
        </button>
      <pre>Currrent mode: {{ $colorMode.value }}</pre>
    </div>
</template>

<script>
import Vue from  'vue'

export default Vue.extend({
    name: 'Settings',
    methods: {
        toggle() {
            this.$colorMode.preference = this.$colorMode.value == "light" ? "dark" : "light"
        }
    }
})
</script>

<style>

</style>