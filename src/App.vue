<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import AttendanceLogTable from './components/AttendanceLogTable.vue'
import ExportedFileTable from './components/ExportedFileTable.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main class="main">
    <SideBar />
    <AttendanceLogTable />
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
