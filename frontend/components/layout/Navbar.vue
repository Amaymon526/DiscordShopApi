<script setup lang="ts">

</script>

<template>
  <nav>
    <div class="logo-container">
      <p>Discord Porn Api</p>
    </div>
    <div class="links-container">
      <ul id="navList">
        <li>
          <NuxtLink class="" activeClass="active" to="/">Home</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav{

  background: var(--background-second);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* Desktop View */
  @media screen and (max-width: 1024px){
    width: 250px;
  }

  /* Mobile View */
  @media screen and (min-width: 1024px){
    width: 100%;
  }

}
</style>