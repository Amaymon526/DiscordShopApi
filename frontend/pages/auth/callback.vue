<script lang="ts" setup>

const route = useRoute();

onMounted(() => {
  handleDiscordRedirect()
})

function handleDiscordRedirect() {
  const code = route.params.code;

  if (code) {
    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({code}),
    })
        .then(response => response.json())
        .then(data => {
          console.log("User data:", data);
        })
        .catch(error => console.error("Error:", error));
  }
}

</script>

<template>
  <div>
    <p>Please wait, you are going to be redirected...</p>
  </div>
</template>

<style scoped>
  p{
    padding: 0;
    margin: 0;
  }
</style>