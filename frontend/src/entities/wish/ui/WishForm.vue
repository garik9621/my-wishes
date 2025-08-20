<script setup lang="ts">
import { Reactive, reactive, useTemplateRef } from 'vue';
import { CreateWishData, Wish } from '../model/types';
import { useRules } from 'vuetify/labs/rules'

const emit = defineEmits<{
  (e: 'submit', value: CreateWishData): void
}>();

const {
  wish
} = defineProps<{
  wish?: Wish
}>()

const rules = useRules()

const formRef = useTemplateRef('form');

const formData: Reactive<CreateWishData> = reactive({
  title: wish?.title || '',
  description: wish?.description || '',
  price: wish?.price || 0,
  link: wish?.link || '',
  image: wish?.image || '',
  priority: 'low',
})

const submit = async () => {
  await formRef.value.validate();

  if (!formRef.value.isValid) {
    return;
  }

  emit('submit', formData);
}
</script>

<template>
  <v-form ref="form" @submit.prevent>
    <v-text-field v-model="formData.title" :rules="[rules.required()]" label="Title" />
    <v-text-field v-model="formData.description" :rules="[rules.required()]" label="Description" />
    <v-text-field v-model="formData.price" :rules="[rules.required()]" label="Price" />
    <v-text-field v-model="formData.link" :rules="[rules.required()]" label="Link" />
    <v-text-field v-model="formData.image" :rules="[rules.required()]" label="Image" />
    <v-btn color="primary" class="mt-4" @click="submit">Submit</v-btn>
  </v-form>
</template>