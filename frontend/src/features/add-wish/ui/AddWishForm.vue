<script setup lang="ts">
import { WishForm, useWishStore } from '@entities/wish';
import type { CreateWishData } from '@entities/wish';

const emit = defineEmits<{
  (e: 'success'): void
}>();

const wishStore = useWishStore();

const onSubmit = async (wishData: CreateWishData) => { 
  await wishStore.addWish(wishData);

  emit('success');
}
</script>

<template>
  <v-card class="pa-4">
    <v-card-title>Add Wish</v-card-title>
    <v-card-text>
      <WishForm :wish @submit="onSubmit" />
    </v-card-text>
  </v-card>
</template>