<script setup lang="ts">
import ColumnItem from '@/components/ColumnItem.vue'
import ArticleCard, { type ArticleData } from '@/components/ArticleCard.vue'
import articles from '@/data/articles.json'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import Article from '@/components/Article.vue'

const router = useRoute()
const rightColumnArticles = ref()
const mainArticle = ref()

watch(
  router,
  () => {
    rightColumnArticles.value = articles.filter((article) => article.column === 3)
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
    <ColumnItem>
      <ArticleCard
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
