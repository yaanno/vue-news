<script setup lang="ts">
import ColumnItem from '@/components/ColumnItem.vue'
import Article, { type ArticleData } from '@/components/Article.vue'
import articles from '@/data/articles.json'
import { useRoute } from 'vue-router'

const route = useRoute()
const rightColumnArticles = articles.filter((article) => article.column === 3)
const mainArticle = articles.find((article) => article.slug === route.params.slug)
</script>
<template>
  <main class="columns" style="--page: article">
    <ColumnItem>
      <Article :data="mainArticle" style="" />
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
  </main>
</template>
