<script setup lang="ts">
import type { ArticleData } from './ArticleCard.vue'
import Tag from './Tag.vue'

defineProps<{ data: ArticleData }>()
</script>
<template>
  <article class="article">
    <header class="article__headline">
      <h1>{{ data.title }}</h1>
      <router-link :to="{ name: 'author', params: { id: data.author.id } }">{{
        data.author.name
      }}</router-link>
    </header>
    <main class="article__content">
      <p>{{ data.teaser }}</p>
      <figure class="article__illustration">
        <picture>
          <img :src="data.thumbnail" alt="Illustration" />
        </picture>
        <figcaption>Illustration</figcaption>
      </figure>

      <p>{{ data.teaser }}</p>
    </main>
    <footer class="article__tags">
      <Tag :tag="tag" v-for="tag in data.tags" v-if="data.tags" />
    </footer>
  </article>
</template>
<style>
.article__tags {
  display: flex;
  gap: 1rem;
  padding-block: 0.5rem;
}
</style>
