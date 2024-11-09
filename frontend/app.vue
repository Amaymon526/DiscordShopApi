<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

</script>

<style>

/* Transition für das Ein- und Ausblenden */
.page-enter-active, .page-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
  transform-style: preserve-3d;
}

/* Start- und Endzustände der Animation */
.page-enter, .page-leave-to {
  opacity: 0;
  transform: rotateY(90deg); /* Start mit 90 Grad Rotation, Seite ist umgeklappt */
}

/* Zielzustand für die Seite nach dem Einblenden */
.page-enter-to {
  opacity: 1;
  transform: rotateY(0); /* Rückkehr zur normalen Ansicht */
}


</style>