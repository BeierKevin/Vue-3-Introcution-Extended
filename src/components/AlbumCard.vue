<template>
  <div class="list-item">
    <img :src="album.thumbnailUrl" alt="album image" />
    <div class="list-item-body">
      <p>AlbumID: {{ album.albumId }} and ID: {{ album.id }}</p>
      <h2>{{ album.title }}</h2>
    </div>
  </div>
</template>

<script>
// Options API
export default {
  name: "AlbumCard",
  // Props can be accessed like variables in the template
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.list-item {
  display: flex;
  flex-direction: row;
  background-color: rgb(27, 78, 208, 0.5);
  padding: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #fff;
}

.list-item:hover {
  background-color: rgb(27, 78, 208, 1);
}

.list-item > img {
  width: 100px;
  height: 100px;
  border-radius: 0.5rem;
}
.list-item-body {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}
</style>
