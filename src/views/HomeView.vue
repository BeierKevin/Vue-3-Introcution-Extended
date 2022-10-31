<template>
  <div>
    <h1>List all Products</h1>
  </div>

  <form>
    <!-- Two way data binding with input field -->
    <input v-model="query" placeholder="Search a album" />
  </form>

  <!-- Vue Click events -->
  <button v-on:click="removeFirstAlbum">Remove Element</button>
  <button @click="shuffleAlbums">Shuffle Elements</button>

  <!-- Vue Conditional Rendering -->
  <h1 v-if="filteredAlbums.length === 0">Nothing Found</h1>
  <h1 v-else>Found {{ filteredAlbums.length }} Albums</h1>

  <!-- Showcase of TransitionGroup Component from Vue 3 -->
  <TransitionGroup name="list" tag="div" class="list-container">
    <!-- Vue Looping -->
    <!-- Using Components -->
    <div v-for="album in filteredAlbums" v-bind:key="album.id">
      {{ album.title }}
    </div>
  </TransitionGroup>
</template>

<script>
// Options API
export default {
  name: "HomeView",
  // these variables can be accessed in the template via their name and inside the script via this.<name>
  data() {
    return {
      albums: [],
      query: "",
    };
  },
  // computed properties are cached and only updated when their dependencies change
  computed: {
    filteredAlbums() {
      return this.albums.filter((album) => {
        return album.title.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
  // methods are called like functions
  methods: {
    removeFirstAlbum() {
      this.albums.shift();
    },
    shuffleAlbums() {
      this.albums.sort(() => Math.random() - 0.5);
    },
    async fetchAlbums() {
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((response) => response.json())
        .then((json) => {
          this.albums = json;
          console.log(json);
        });
    },
  },
  // lifecycle hook, called when the component is created
  created() {
    this.fetchAlbums();
  },
};
</script>

<style scoped>
/* Style for the list item container */
.list-container {
  margin-top: 1rem;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

/* Vue Transition Group Styling */
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
