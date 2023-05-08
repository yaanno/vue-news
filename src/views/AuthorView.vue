<script setup lang="ts">
import ColumnItem from '@/components/ColumnItem.vue'
import Article from '@/components/ArticleCard.vue'
import Author from '@/components/AuthorItem.vue'
import articles from '@/data/articles.json'
import authors from '@/data/authors.json'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRoute()
const rightColumnArticles = ref()
const author = ref()
const authorArticles = ref()

watch(
  router,
  () => {
    rightColumnArticles.value = articles.filter((article) => article.column === 3)
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
