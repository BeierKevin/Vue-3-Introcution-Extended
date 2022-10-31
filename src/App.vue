<template>
  <header>
    <nav>
      <h1>Simple Album Overview</h1>
      <!-- Routing -->
      <router-link to="/" class="links">List of all Albums</router-link>
    </nav>
  </header>

  <main><router-view /></main>
</template>

<script></script>

<style>
/* General style reset and customisation */
*,
:after,
:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  color: white;
}

body {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  background-color: #262626;
}

/* Header stylings */
header {
  padding: 1rem;
  background-color: #1b4ed0;
}

header > nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.links {
  color: white;
  text-decoration: none;
  font-weight: 700;
  height: 100%;
}

.links:hover {
  color: #1b4ed0;
  background-color: white;
}
.links:nth-child(1) {
  margin-right: 2rem;
}

/* Main stylings */
main {
  padding: 0.5rem 1rem;
}
</style>
