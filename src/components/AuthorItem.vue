<script setup lang="ts">
import type { StyleValue } from 'vue'
defineProps<{ style: StyleValue; data: AuthorData }>()
export interface AuthorData {
  name: string
  thumbnail: string
  summary: string
  contact: { email: string }
}
</script>
<template>
  <div class="article__item" :style="style">
    <article class="card u-flow">
      <div class="card__thumb">
        <img :src="data.thumbnail" alt="" />
      </div>
      <div class="card__content u-flow">
        <h2 class="card__title">
          {{ data.name }}
        </h2>
        <p class="card__tease">{{ data.summary }}</p>
        <p class="card__meta">Contact: {{ data.contact.email }}</p>
      </div>
    </article>
  </div>
</template>
