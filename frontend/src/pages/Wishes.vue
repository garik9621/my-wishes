<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useWishStore } from '@/entities/wish'
import type { CreateWishData } from '@/entities/wish'

const wishStore = useWishStore()
const dialog = ref(false)

const newWish = ref<CreateWishData>({
  title: '',
  description: '',
  price: 0,
  priority: 'medium'
})

const priorityOptions = [
  { title: 'Low', value: 'low' },
  { title: 'Medium', value: 'medium' },
  { title: 'High', value: 'high' }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'error'
    case 'medium': return 'warning'
    case 'low': return 'success'
    default: return 'grey'
  }
}

const addWish = async () => {
  if (!newWish.value.title.trim()) return
  
  try {
    await wishStore.saveWish(newWish.value)
    dialog.value = false
    newWish.value = {
      title: '',
      description: '',
      price: 0,
      priority: 'medium'
    }
  } catch (error) {
    console.error('Failed to add wish:', error)
  }
}

const deleteWish = (id: string) => {
  if (confirm('Are you sure you want to delete this wish?')) {
    wishStore.deleteWish(id)
  }
}

onMounted(() => {
  wishStore.loadWishes()
})
</script>

<template>
  <v-container class="py-10">
    <v-card class="pa-6" elevation="2">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h5">My Wishes</span>
        <v-btn @click="dialog = true" color="primary">
          Add Wish
        </v-btn>
      </v-card-title>
      
      <v-card-text>
        <div v-if="wishStore.isLoading" class="text-center">
          <v-progress-circular indeterminate />
        </div>
        
        <div v-else-if="wishStore.error" class="text-error">
          {{ wishStore.error }}
        </div>
        
        <div v-else-if="wishStore.wishes.length === 0" class="text-center">
          <p>No wishes yet. Add your first wish!</p>
        </div>
        
        <div v-else>
          <v-list>
            <v-list-item
              v-for="wish in wishStore.wishes"
              :key="wish.id"
              class="mb-2"
            >
              <template v-slot:prepend>
                <v-checkbox
                  :model-value="wish.isCompleted"
                  @update:model-value="() => wishStore.toggleWishCompletion(wish.id)"
                />
              </template>
              
              <v-list-item-title
                :class="{ 'text-decoration-line-through': wish.isCompleted }"
              >
                {{ wish.title }}
              </v-list-item-title>
              
              <v-list-item-subtitle v-if="wish.description">
                {{ wish.description }}
              </v-list-item-subtitle>
              
              <template v-slot:append>
                <v-chip
                  :color="getPriorityColor(wish.priority)"
                  size="small"
                  class="mr-2"
                >
                  {{ wish.priority }}
                </v-chip>
                <span class="text-caption">${{ wish.price }}</span>
                <v-btn
                  icon="mdi-delete"
                  variant="text"
                  size="small"
                  @click="deleteWish(wish.id)"
                />
              </template>
            </v-list-item>
          </v-list>
          
          <v-divider class="my-4" />
          
          <div class="d-flex justify-space-between align-center">
            <span>Total: ${{ wishStore.getTotalPrice }}</span>
            <v-btn
              v-if="wishStore.getCompletedWishes.length > 0"
              @click="wishStore.clearCompletedWishes"
              variant="outlined"
              color="error"
            >
              Clear Completed
            </v-btn>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Add Wish Dialog -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>Add New Wish</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="addWish">
            <v-text-field
              v-model="newWish.title"
              label="Title"
              required
              variant="outlined"
              class="mb-4"
            />
            
            <v-textarea
              v-model="newWish.description"
              label="Description"
              variant="outlined"
              rows="3"
              class="mb-4"
            />
            
            <v-text-field
              v-model.number="newWish.price"
              label="Price"
              type="number"
              variant="outlined"
              class="mb-4"
            />
            
            <v-select
              v-model="newWish.priority"
              label="Priority"
              :items="priorityOptions"
              variant="outlined"
              class="mb-4"
            />
          </v-form>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer />
          <v-btn @click="dialog = false">Cancel</v-btn>
          <v-btn @click="addWish" color="primary" :loading="wishStore.isLoading">
            Add Wish
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
