<script setup lang="ts">
import ColumnItem from '@/components/ColumnItem.vue'
import articles from '@/data/articles.json'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import Article from '@/components/Article.vue'
import RecommendedArticles from '@/components/RecommendedArticles.vue'

const router = useRoute()
const recommendedArticles = ref()
const mainArticle = ref()

watch(
  router,
  () => {
    recommendedArticles.value = articles.filter((article) => article.recommended)
    mainArticle.value = articles.find((article) => article.slug === router.params.slug)
  },
  { immediate: true }
)
</script>
<template>
  <main class="columns" style="--cols: 2">
    <ColumnItem>
      <Article :data="mainArticle" />
    </ColumnItem>
    <RecommendedArticles :articles="recommendedArticles" />
  </main>
</template>
