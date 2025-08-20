<script setup lang="ts">
import { reactive } from 'vue';
import { Wish } from '@entities/wish';

const {
  wish
} = defineProps<{
  wish?: Wish
}>()

const form = reactive({
    title: wish?.title || '',
    description: wish?.description || '',
    price: wish?.price || 0,
    link: wish?.link || '',
    image: wish?.image || '',
})
</script>

<template>
  <div>
    <v-card class="pa-4">
        <v-card-title>Add Wish</v-card-title>
        <v-card-text>
        <v-text-field v-model="form.title" :rules="[]" label="Title" />
        <v-text-field v-model="form.description" :rules="[]" label="Description" />
        <v-text-field v-model="form.price" :rules="[]" label="Price" />
        <v-text-field v-model="form.link" :rules="[]" label="Link" />
        <v-text-field v-model="form.image" :rules="[]" label="Image" />
        </v-card-text>
        <v-card-actions>
            <v-btn type="submit">Add</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>