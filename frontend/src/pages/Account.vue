<template>
  <v-container class="py-10">
    <v-card class="pa-6" elevation="2">
      <v-card-title class="text-h5">Account Settings</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="saveProfile">
          <v-text-field
            v-model="profile.name"
            label="Name"
            variant="outlined"
            class="mb-4"
          />
          <v-text-field
            v-model="profile.email"
            label="Email"
            type="email"
            variant="outlined"
            class="mb-4"
          />
          <v-textarea
            v-model="profile.bio"
            label="Bio"
            variant="outlined"
            rows="3"
            class="mb-6"
          />
          <v-btn
            type="submit"
            color="primary"
            :loading="saving"
            :disabled="saving"
          >
            Save Profile
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface UserProfile {
  name: string
  email: string
  bio: string
}

const profile = ref<UserProfile>({
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Software developer'
})

const saving = ref<boolean>(false)

const saveProfile = async () => {
  saving.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Profile saved:', profile.value)
  } catch (e) {
    console.error('Failed to save profile:', e)
  } finally {
    saving.value = false
  }
}
</script>
