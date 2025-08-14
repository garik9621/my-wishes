<template>
  <v-container class="py-10">
    <v-card class="pa-6" elevation="2">
      <v-card-title class="text-h5">Hello from Backend</v-card-title>
      <v-card-text>
        <div v-if="loading">Loading...</div>
        <div v-else>{{ message }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const message = ref<string>('')
const loading = ref<boolean>(true)

onMounted(async () => {
  try {
    const res = await fetch('/api/hello')
    const data = await res.json() as { message: string }
    message.value = data.message
  } catch (e) {
    message.value = 'Failed to load message'
  } finally {
    loading.value = false
  }
})
</script>
