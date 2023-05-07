<script setup lang="ts">
defineProps<{ tag: string }>()
</script>

<template>
  <div class="tag__item">
    {{ tag }}
  </div>
</template>

<style>
.tag__item {
  /* display: flex; */
}
</style>
