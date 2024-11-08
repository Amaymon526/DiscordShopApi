<script setup lang="ts">

const userStore = useUserStore();

function loginWithDiscord() {
  const clientId = "1304350765976125530";
  const redirectUri = encodeURIComponent("https://localhost:3000/auth/callback");
  const scope = "identify";
  const responseType = "code";

  const discordLoginUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

  navigateTo(discordLoginUrl, { external: true});
}

</script>

<template>
  <div v-if="userStore.isAuthenticated()">
    Willkommen {{ userStore.user }}
  </div>
  <div v-else>
    <button @click="loginWithDiscord">Log in with Discord</button>
  </div>
</template>

<style scoped>

</style>