<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
import FooterNav from './components/FooterNav.vue'
</script>

<template>
  <TopNav />
  <div class="wrap">
    <RouterView />
  </div>
  <FooterNav />
</template>

<style></style>
