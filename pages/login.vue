<template>
    <div>
        <h1>Login</h1>
        <button @click="createUser">log now</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Login',
    methods: {
        async createUser() {
            try {
                await this.$fire.auth.createUserWithEmailAndPassword(
                    'foo@foo.foo',
                    'test123'
                )
            } catch (e) {
                console.log(e)
            }
        }
    }
})
</script>

<style></style>
