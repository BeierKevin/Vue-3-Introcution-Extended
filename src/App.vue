<!-- App.vue -->
<template>
  <Component2 msg="Passed">
    <template v-slot:default>
      <div>Passed as a slot</div>
    </template>
    <template v-slot:body>
      <div>Another slot with name</div>
    </template>
  </Component2>
</template>

<script>
import Component2 from "./Component2.vue";

export default {
  name: "Example",
  components: {
    Component2,
  },
};
</script>
