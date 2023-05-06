<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
import FooterNav from './components/FooterNav.vue'
</script>

<template>
  <TopNav />
  <RouterView />
  <FooterNav />
</template>

<style></style>
