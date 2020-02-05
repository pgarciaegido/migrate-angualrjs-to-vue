<script>
export default {
    data() {
        return {
            name: 'Vue'
        }
    },
    methods: {
        toAbout() {
            this.$router.push({ name: 'about' });
        }
    }
}
</script>

<template>
    <div class="root" id="vue-app">
        <h1 class="title">VueJS App</h1>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
