<template>
  <div>
    <img :src="picture" />
    <span>{{ id }}</span>
    <span v-show="display">{{ name }}</span>
    <span v-show="display">{{ localization }}</span>
    <ul v-show="display">
      <li v-for="(role, idx) in roles" :key="idx">{{ role }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Point",
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    roles: { type: Array, default: () => [] },
    localization: { type: String, required: true },
    picture: { type: String, required: true },
  },
  data() {
      return {
        display: false
      };
  },
  methods: {
      changeVisibility(newVisibility) {
          this.display = newVisibility;
      }
  }
};
</script>

<style scoped lang="scss">
</style>