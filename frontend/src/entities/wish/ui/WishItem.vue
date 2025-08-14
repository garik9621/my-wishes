<script setup lang="ts">
import { Wish } from '../model/types';

const {
    wish
} = defineProps<{
    wish: Wish
}>();
</script>

<template>
  <div>
    <v-card :to="'/wish/1'" class="m-4">
        <v-img 
            :src="wish.image" 
            height="200px" 
            cover
        ></v-img>
 
        <v-card-title>
            {{ wish.title }}
        </v-card-title>
        <v-card-text>
            {{ wish.price }}
        </v-card-text>
        <v-card-actions>
            <v-btn>Book</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>
