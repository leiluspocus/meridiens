<template>
  <div class="point">
    <img v-show="display" :src="picture" />
    <span class="point__id">{{ id }}</span>
    <span v-show="display" class="point__name">{{ name }}</span>
    <span v-show="display" class="point__loc">{{ localization }}</span>
    <ul class="point__roles" v-show="display">
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
.point {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 16px;

  width: 240px;
  margin: 32px auto;

  &__id {
    background-color: #eee;
  }

  &__roles {
    list-style: none;
  }
}
</style>