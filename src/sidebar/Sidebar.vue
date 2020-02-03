<script>
import menu from '../menu.json';

import { changePage } from '../angularToVue';

export default {
    data() {
        return {
            menu
        }
    },
    methods: {
        changePage
    } 
}
</script>

<template>
    <div class="sidebar">
        <p class="pointer" v-for="m in menu" :key="m.name" @click="changePage(m.name)">{{m.name}}</p>
    </div>
</template>

<style scoped>
    .sidebar {
        padding: 20px;
    }
</style>
