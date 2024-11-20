<template>
  <NuxtLayout>
    <v-app class="d-flex flex-column" style="min-height: 100vh;">
      <header class="header-color">
        <h1>Custom Outlands locator</h1>
      </header>

      <main class="flex-grow-1">
        <NuxtPage />
      </main>

      <footer>
        <p>© 2024 by Luckystriike</p>
      </footer>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
</script>

<style>
header {
  background: #f5f5f5;
  padding: 1em;
  text-align: center;
}

footer {
  padding: 1em;
  text-align: center;
}

.header-color {
  background-color: #587184;
}

v-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1; /* This makes sure the main content takes up the remaining space */
}
</style>
