<script setup lang="ts">

</script>

<template>
  <div>
    <v-card :to="'/wish/1'" class="m-4">
        <v-img 
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" 
            height="200px" 
            cover
        ></v-img>
 
        <v-card-title>
            Wish
        </v-card-title>
        <v-card-text>
            price
        </v-card-text>
        <v-card-actions>
            <v-btn>Book</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>
