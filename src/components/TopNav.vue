<script lang="ts" setup></script>
<template>
  <header class="top-navigation">
    <div class="left">
      <RouterLink :to="{ name: 'home' }">Vue News</RouterLink>
    </div>
    <div class="right">
      <nav>
        <ul role="list">
          <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
          <li>Something</li>
          <li>Else</li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style>
.top-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;
}
.top-navigation .left {
  display: flex;
  align-items: center;
  font-size: clamp(32px, 50%, 50vw);
}
.top-navigation .right {
}
.top-navigation .right ul {
  display: flex;
  gap: 1rem;
  padding: 0;
}
</style>
