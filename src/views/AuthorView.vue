<script setup lang="ts">
import articles from '@/data/articles.json'
import authors from '@/data/authors.json'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import ColumnItem from '@/components/ColumnItem.vue'
import Article from '@/components/ArticleCard.vue'
import Author from '@/components/AuthorItem.vue'
import RecommendedArticles from '@/components/RecommendedArticles.vue'

const router = useRoute()
const recommendedArticles = ref()
const author = ref()
const authorArticles = ref()

watch(
  router,
  () => {
    recommendedArticles.value = articles.filter((article) => article.recommended)
    author.value = authors.find((author) => author.id.toString() === router.params.id)
    authorArticles.value = articles.filter((article) => article.author.id === author.value.id)
  },
  { immediate: true }
)
</script>
<template>
  <main class="columns" style="--cols: 2">
    <ColumnItem>
      <Author :data="author" :style="`--horizontal: true`" v-if="author" />
      <Article
        v-for="(article, index) in authorArticles"
        :data="article"
        :style="`--horizontal: true;`"
        :key="`${article.slug}-${index}`"
      />
    </ColumnItem>
    <RecommendedArticles :articles="recommendedArticles" />
  </main>
</template>
