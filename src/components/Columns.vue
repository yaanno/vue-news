<script setup lang="ts">
import Article, { type ArticleData } from './ArticleCard.vue'
import ColumnItem from './ColumnItem.vue'
import articles from '@/data/articles.json'

const featuredColumnArticles = articles.filter((article) => article.featured)
const leftColumnArticles = articles.filter((article) => article.latest)
const rightColumnArticles = articles.filter((article) => article.recommended)

</script>
<template>
  <ColumnItem>
    <Article
      v-for="(article, index) in featuredColumnArticles"
      :data="article"
      :style="`${index < 1 ? '--featured: true' : ''}; --horizontal: true; ${index > 0 ? '--flipped: true' : ''};`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
  <ColumnItem>
    <Article
      v-for="(article, index) in leftColumnArticles"
      :data="article"
      :style="`${index < 1 ? '--compact: 2' : ''}; --horizontal: true; ${index > 0 ? '--thumb: mobile-only' : ''};`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
  <ColumnItem>
    <Article
      v-for="(article, index) in rightColumnArticles"
      :data="article"
      :style="`${index < 1 ? '--compact: 2' : ''}; --horizontal: true; ${index > 0 ? '--thumb: mobile-only' : ''};`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
</template>
