<script setup lang="ts">
const user = {
  avatar: 'https://cdn.vuetifyjs.com/images/john.png',
}
</script>

<template>
  <v-card class="pa-4">
    <v-avatar 
      :size="100"
      :image="user.avatar"
      class="mr-4"
    />
    <div>
      <h1>John Doe</h1>
      <p>john.doe@example.com</p>
    </div>
  </v-card>
</template>