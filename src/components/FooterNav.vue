<template>
  <footer class="foot-navigation">
    <nav>
      <ul role="list">
        <li>&copy; Vue News</li>
        <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
        <li>Something</li>
        <li>Else</li>
      </ul>
    </nav>
  </footer>
</template>
<style>
.foot-navigation {
  display: flex;
  padding-block: 2rem;
  justify-content: center;
}

.foot-navigation ul {
  display: flex;
  gap: 1rem;
  padding: 0;
}
</style>
