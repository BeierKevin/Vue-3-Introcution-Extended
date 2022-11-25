<!-- Component2.vue -->
<template>
  <div>Hello from {{ msg }}</div>
  <slot name="default"></slot>
  <slot name="body"></slot>
</template>

<script>
export default {
  name: "Component2",
  props: {
    msg: String,
  },
};
</script>
