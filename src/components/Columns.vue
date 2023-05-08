<script setup lang="ts">
import Article, { type ArticleData } from './ArticleCard.vue'
import ColumnItem from './ColumnItem.vue'
import articles from '@/data/articles.json'
import RecommendedArticles from './RecommendedArticles.vue'

const featuredArticles = articles.filter((article) => article.featured)
const latestArticles = articles.filter((article) => article.latest)
const recommendedArticles = articles.filter((article) => article.recommended)
</script>
<template>
  <ColumnItem>
    <Article
      v-for="(article, index) in featuredArticles"
      :data="article"
      :style="`${index < 1 ? '--featured: true' : ''}; --horizontal: true; ${
        index > 0 ? '--flipped: true' : ''
      };`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
  <ColumnItem>
    <template #headline>
      <h3>Latest</h3>
    </template>
    <Article
      v-for="(article, index) in latestArticles"
      :data="article"
      :style="`${index < 1 ? '--compact: 2' : ''}; --horizontal: true; ${
        index > 0 ? '--thumb: mobile-only' : ''
      };`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>

  <RecommendedArticles :articles="recommendedArticles" />
</template>
