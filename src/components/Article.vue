<script setup lang="ts">
import type { StyleValue } from 'vue'
defineProps<{ style: StyleValue; data: ArticleData }>()
export interface ArticleData {
  thumbnail: string
  title: string
  teaser: string
  author: string
}
</script>
<template>
  <div class="article__item" :style="style">
    <article class="c-card u-flow">
      <div class="c-card__thumb">
        <img :src="data.thumbnail" alt="" />
      </div>
      <div class="c-card__content u-flow">
        <h3 class="c-card__title">{{ data.title }}</h3>
        <p class="c-card__tease">{{ data.teaser }}</p>
        <p class="c-card__meta">
          By <a href="#">{{ data.author }}</a>
        </p>
      </div>
    </article>
  </div>
</template>
