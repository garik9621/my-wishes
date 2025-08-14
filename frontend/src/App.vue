<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>My Wishes</v-app-bar-title>
      <v-spacer />
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/account" variant="text">Account</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// App component with navigation
</script>
