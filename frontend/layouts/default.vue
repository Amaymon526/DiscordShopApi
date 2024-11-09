<script setup lang="ts">

import Navbar from "~/components/layout/Navbar.vue";
</script>

<template>
<div class="container">
  <div class="content">
    <Navbar/>
    <slot/>
    <Footer/>
  </div>
</div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>