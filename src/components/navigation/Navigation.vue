<template>
  <nav class="nav">
    <ul>
      <li><RouterLink to="#">Home</RouterLink></li>
      <li><RouterLink to="#">Category</RouterLink></li>
      <li><RouterLink to="#">About</RouterLink></li>
      <li><RouterLink to="#">Contact</RouterLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    column-gap: 48px;
    li {
      a {
        font-weight: 500;
        color: var(--primary-blue);
      }
    }
  }
}
</style>
