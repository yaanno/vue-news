<script setup lang="ts">
import type { ArticleData } from './ArticleCard.vue'
import ArticleCard from './ArticleCard.vue'
import ColumnItem from './ColumnItem.vue'

defineProps<{ articles: ArticleData[] }>()
</script>
<template>
  <ColumnItem>
    <template #headline>
      <h3>Recommended</h3>
    </template>
    <ArticleCard
      v-for="(article, index) in articles"
      :data="article"
      :style="`${index < 1 ? '--compact: 2;' : ''} --horizontal: true; ${
        index > 0 ? '--thumb: mobile-only;' : '--thumb: grid-2;'
      }`"
      :key="`${article.slug}-${index}`"
    />
  </ColumnItem>
</template>
