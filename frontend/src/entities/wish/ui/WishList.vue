<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WishItem from './WishItem.vue'
import { useWishStore } from '../model/wishStore'
import {EditWishForm} from '@features/edit-wish'

const wishStore = useWishStore();

const isEditWishDialogVisible = ref(false);
const wishToEdit = ref();

const editWish = (wishId: string) => {
  wishToEdit.value = wishStore.wishes.find((wish) => wish.id === wishId) || {};
  isEditWishDialogVisible.value = true;
}

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
        @book=""
        @edit="editWish(wish.id)"
        @delete="wishStore.deleteWish(wish.id)"
      />
    </v-col>
  </v-row>

  <v-dialog v-model="isEditWishDialogVisible" width="500">
    <EditWishForm :wish="wishToEdit" />
  </v-dialog>
</template>
