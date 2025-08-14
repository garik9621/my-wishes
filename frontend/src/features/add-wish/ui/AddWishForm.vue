<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({
    title: '',
    description: '',
    price: 0
})
</script>

<template>
  <div>
    <v-card class="pa-4">
        <v-card-title>Add Wish</v-card-title>
        <v-card-text>
        <v-text-field label="Title" />
        <v-text-field label="Description" />
        <v-text-field label="Price" />
        </v-card-text>
        <v-card-actions>
            <v-btn type="submit">Add</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>