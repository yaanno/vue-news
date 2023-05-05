<script setup lang="ts">
import ColumnItem from '@/components/ColumnItem.vue'
import Article, { type ArticleData } from '@/components/Article.vue'
import Author, { type AuthorData } from '@/components/AuthorItem.vue'
import articles from '@/data/articles.json'
import authors from '@/data/authors.json'
import { useRoute } from 'vue-router'

const router = useRoute()
const rightColumnArticles = articles.filter((article) => article.column === 3)
const author = authors.find((author) => author.id.toString() === router.params.id)
const authorArticles = articles.filter((article) => article.author.id === author!.id)
</script>
<template>
  <main class="columns" style="--page: author">
    <ColumnItem>
      <Author :data="author" :style="`--horizontal: true`" v-if="author" />
      <Article
        v-for="(article, index) in authorArticles"
        :data="article"
        :style="`--horizontal: ${article.style?.horizontal}; --thumb: ${article.style?.thumb}`"
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
  </main>
</template>
