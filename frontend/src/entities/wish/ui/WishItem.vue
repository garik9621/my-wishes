<script setup lang="ts">
import { Transition, ref } from 'vue';
import { Wish } from '../model/types';

const emit = defineEmits<{
    (e: 'book'): void;
    (e: 'edit'): void;
    (e: 'delete'): void;
}>();

const {
    wish
} = defineProps<{
    wish: Wish
}>();

const displayCard = ref(true)

const bookWish = () => {
    emit('book');
}

const editWish = () => {
    emit('edit');
}

const removeWish = () => {
    displayCard.value = false;

    setTimeout(() => {
        emit('delete');
    }, 500)
}
</script>

<template>
    <Transition>
        <v-card v-if="displayCard" :to="`/wish/${wish.id}`" class="m-4">
            <v-img :src="wish.image" height="200px" cover></v-img>
            <v-card-title>
                {{ wish.title }}
            </v-card-title>
            <v-card-text>
                {{ wish.price }}
            </v-card-text>
            <v-card-actions>
                <v-btn @click.prevent="bookWish">Book</v-btn>
                <v-btn @click.prevent="editWish" color="orange">Edit</v-btn>
                <v-btn @click.prevent="removeWish" color="error">Remove</v-btn>
            </v-card-actions>
        </v-card>
    </Transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s linear;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>