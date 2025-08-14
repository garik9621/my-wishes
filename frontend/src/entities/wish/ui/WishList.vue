<script setup lang="ts">
import { onMounted } from 'vue'
import WishItem from './WishItem.vue'
import { useWishStore } from '../model/wishStore'
const wishStore = useWishStore()

onMounted(() => {
  wishStore.loadWishes()
})
</script>

<template>
  <v-row>
    <v-col 
      v-for="wish in wishStore.wishes"
      :key="wish.id"
      cols="12" 
      md="4"
    >
      <WishItem 
        :wish
      />
    </v-col>
  </v-row>
</template>
