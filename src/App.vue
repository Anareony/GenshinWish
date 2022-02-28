<template>
    <Navbar></Navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
    components: { Navbar }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: rgb(24, 24, 24);
    color: white;
}

a{
    outline: none;
    text-decoration: none;
}


.app {
    margin-left: 200px;
    padding: 15px;
}
</style>