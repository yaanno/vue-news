<script setup lang="ts">
import Article, { type ArticleData } from './Article.vue'
import ColumnItem from './ColumnItem.vue'
const data: ArticleData = {
  title: 'Savory Italian Pasta Dishes',
  teaser: 'Discover the best pasta recipes for your next dinner party.',
  meta: 'Ahmad Shadeed'
}
</script>
<template>
  <ColumnItem>
    <Article :data="data" style="--featured: true" />
    <Article :data="data" style="--horizontal: true; --flipped: true" />
  </ColumnItem>
  <ColumnItem>
    <Article :data="data" style="--compact: 2; --horizontal: true" />
    <Article :data="data" style="--horizontal: true; --thumb: mobile-only" />
    <Article :data="data" style="--horizontal: true; --thumb: mobile-only" />
  </ColumnItem>
  <ColumnItem>
    <Article :data="data" style="--compact: 2; --horizontal: true; --thumb: grid-2" />
    <Article :data="data" style="--horizontal: true; --thumb: mobile-only" />
    <Article :data="data" style="--horizontal: true; --thumb: mobile-only" />
  </ColumnItem>
</template>
