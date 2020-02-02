<script>
export default {
    created() {
        console.log('App.vue!');
    },
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
        <p class="pointer" @click="toAbout">Go To About</p>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
