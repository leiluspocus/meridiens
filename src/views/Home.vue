<template>
  <div class="home">
    <div class="home__actions">
      <button @click="randomize">🔮</button>
      <button @click="showCard">Révéler</button>
    </div>
    <Point
      ref="point"
      :id="point.id"
      :name="point.name"
      :roles="point.roles"
      :localization="point.localization"
      :picture="point.picture"
    />
  </div>
</template>

<script>
// @ is an alias to /src 
import Point from "@/components/Point.vue";

export default {
  name: "Home",
  components: {
    Point,
  },
  data() {
    return {
      isCardVisible: false,
      randomIndex: 0
    };
  },
  computed: {
    point() {
      return this.$store.state.points[this.randomIndex];
    }
  },
  methods: {
    showCard() {
      this.isCardVisible = !this.isCardVisible;
      this.$refs.point.changeVisibility(this.isCardVisible);
    },
    randomize() {
      this.randomIndex = Math.floor(Math.random() * this.$store.state.points.length);
      if ( this.randomIndex > this.$store.state.points.length) {
        this.randomIndex = 0;
      }
    }
  }
};
</script>

<style scoped>
.home {
  width: 50%;
  margin: 0 auto;
}
.home__actions {
  display: flex;
  justify-content: space-around;
}
</style>
