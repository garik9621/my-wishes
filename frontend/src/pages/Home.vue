<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { User } from '@entities/user'
import { WishList } from '@entities/wish'
import { AddWishForm } from '@features/add-wish'
const message = ref<string>('')
const loading = ref<boolean>(true)
const dialog = ref<boolean>(false)
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

<template>
  <v-container class="py-10">
    <v-btn @click="dialog = true" class="mb-4">Add Wish</v-btn>
    <User />
    <WishList class="mt-4"/>

    <v-dialog v-model="dialog" width="500">
      <AddWishForm @success="dialog = false" />
    </v-dialog>
  </v-container>
</template>
