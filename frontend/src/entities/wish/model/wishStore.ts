import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Wish, CreateWishData, UpdateWishData } from './types'

export const useWishStore = defineStore('wish', () => {
  // State
  const wishes = ref<Wish[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const getWishById = computed(() => {
    return (id: string) => wishes.value.find(wish => wish.id === id)
  })

  const getWishesByPriority = computed(() => {
    return (priority: Wish['priority']) => 
      wishes.value.filter(wish => wish.priority === priority)
  })

  const getCompletedWishes = computed(() => {
    return wishes.value.filter(wish => wish.isCompleted)
  })

  const getActiveWishes = computed(() => {
    return wishes.value.filter(wish => !wish.isCompleted)
  })

  const getTotalPrice = computed(() => {
    return wishes.value.reduce((total, wish) => total + wish.price, 0)
  })

  // Actions
  const addWish = (wishData: CreateWishData) => {
    const newWish: Wish = {
      id: generateId(),
      ...wishData,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    wishes.value.push(newWish)
    return newWish
  }

  const updateWish = (id: string, updateData: UpdateWishData) => {
    const wishIndex = wishes.value.findIndex(wish => wish.id === id)
    if (wishIndex === -1) {
      throw new Error(`Wish with id ${id} not found`)
    }

    wishes.value[wishIndex] = {
      ...wishes.value[wishIndex],
      ...updateData,
      updatedAt: new Date()
    }

    return wishes.value[wishIndex]

    // TODO: add request to backend
  }

  const deleteWish = (id: string) => {
    const wishIndex = wishes.value.findIndex(wish => wish.id === id)
    if (wishIndex === -1) {
      throw new Error(`Wish with id ${id} not found`)
    }

    wishes.value.splice(wishIndex, 1)

    // TODO: add request to backend
  }

  const toggleWishCompletion = (id: string) => {
    const wish = getWishById.value(id)
    if (!wish) {
      throw new Error(`Wish with id ${id} not found`)
    }

    updateWish(id, { isCompleted: !wish.isCompleted })
  }

  const clearCompletedWishes = () => {
    wishes.value = wishes.value.filter(wish => !wish.isCompleted)
  }

  const loadWishes = async () => {
    isLoading.value = true
    error.value = null

    wishes.value = [
      {
        id: '1',
        title: 'Wish 1',
        description: 'Description 1',
        price: 100,
        priority: 'low',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        image: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
        link: ''
      },
      {
        id: '2',
        title: 'Wish 2',
        description: 'Description 2',
        price: 200,
        priority: 'medium',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        image: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
        link: ''
      },
      {
        id: '3',
        title: 'Wish 3',
        description: 'Description 3',
        price: 300,
        priority: 'high',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        image: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg',
        link: ''
      }
    ];
    
    return;
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/wishes')
      if (!response.ok) {
        throw new Error('Failed to load wishes')
      }
      const data = await response.json()
      wishes.value = data.map((wish: any) => ({
        ...wish,
        createdAt: new Date(wish.createdAt),
        updatedAt: new Date(wish.updatedAt)
      }))
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      isLoading.value = false
    }
  }

  const saveWish = async (wishData: CreateWishData) => {
    isLoading.value = true
    error.value = null

    addWish(wishData)

    isLoading.value = false;

    return;

    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wishData)
      })
      
      if (!response.ok) {
        throw new Error('Failed to save wish')
      }
      
      const savedWish = await response.json()
      addWish(savedWish)
      return savedWish
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Helper function
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  return {
    // State
    wishes,
    isLoading,
    error,
    
    // Getters
    getWishById,
    getWishesByPriority,
    getCompletedWishes,
    getActiveWishes,
    getTotalPrice,
    
    // Actions
    addWish,
    updateWish,
    deleteWish,
    toggleWishCompletion,
    clearCompletedWishes,
    loadWishes,
    saveWish
  }
})
