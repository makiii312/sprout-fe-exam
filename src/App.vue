<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main class="main">
    <SideBar />
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
}
.main {
  display: flex;
  flex-direction: row;
  margin-top: 76px;
}
</style>
