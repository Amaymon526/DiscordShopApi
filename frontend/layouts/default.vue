<script setup lang="ts">

</script>

<template>
<div class="container">
  <div>
    <p>This is the default layout</p>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/auth/callback">callback</NuxtLink>
      </li>
    </ul>
  </div>
  <div class="content">
    <slot/>
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