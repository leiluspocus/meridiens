<template>
  <div>
    <img :src="picture" />
    <span>{{ name }}</span>
    <span>{{ localization }}</span>
    <ul>
      <li v-for="(role, idx) in roles" :key="idx">{{ role }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Point",
  props: {
    name: { type: String, required: true },
    roles: { type: Array, default: () => [] },
    localization: { type: String, required: true },
    picture: { type: String, required: true },
  },
};
</script>

<style scoped lang="scss">
</style>