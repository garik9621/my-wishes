<script setup lang="ts">
import { Reactive, reactive } from 'vue';
import { CreateWishData, Wish } from '../model/types';

const emit = defineEmits<{
    (e: 'submit', value: CreateWishData)
}>();

const {
  wish
} = defineProps<{
  wish?: Wish
}>()

const form: Reactive<CreateWishData> = reactive({
    title: wish?.title || '',
    description: wish?.description || '',
    price: wish?.price || 0,
    link: wish?.link || '',
    image: wish?.image || '',
})

const submit = () => {

}
</script>

<template>
  <div>
    <v-card class="pa-4">
        <v-card-title>Add Wish</v-card-title>
        <v-card-text>
            <v-form @submit.prevent>
                <v-text-field v-model="form.title" :rules="[]" label="Title" />
                <v-text-field v-model="form.description" :rules="[]" label="Description" />
                <v-text-field v-model="form.price" :rules="[]" label="Price" />
                <v-text-field v-model="form.link" :rules="[]" label="Link" />
                <v-text-field v-model="form.image" :rules="[]" label="Image" />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="submit"></v-btn>Add</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>