<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>My Wishes</v-app-bar-title>
      <v-spacer />
      
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/account">
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// App component with navigation
</script>
