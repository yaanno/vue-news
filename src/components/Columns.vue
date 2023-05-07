<script setup lang="ts">
import Article, { type ArticleData } from './ArticleCard.vue'
import ColumnItem from './ColumnItem.vue'
import articles from '@/data/articles.json'

const featuredColumnArticles = articles.filter((article) => article.column === 1)
const leftColumnArticles = articles.filter((article) => article.column === 2)
const rightColumnArticles = articles.filter((article) => article.column === 3)
</script>
<template>
  <ColumnItem>
    <Article
      v-for="(article, index) in featuredColumnArticles"
      :data="article"
      :style="`--featured: ${article.featured}; --horizontal: ${article.style?.horizontal}; --flipped: ${article.style?.flipped}`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
  <ColumnItem>
    <Article
      v-for="(article, index) in leftColumnArticles"
      :data="article"
      :style="`${index < 1 ? '--compact: 2' : ''}; --horizontal: ${
        article.style?.horizontal
      }; --thumb:${article.style?.thumb};`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
  <ColumnItem>
    <Article
      v-for="(article, index) in rightColumnArticles"
      :data="article"
      :style="`${index < 1 ? '--compact: 2' : ''}; --horizontal: ${
        article.style?.horizontal
      }; --thumb: ${article.style?.thumb}`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
</template>
