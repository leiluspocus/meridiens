<template>
  <div class="home">
    <div class="home__actions">
      <button>🔮</button>
      <button @click="showCard">Révéler</button>
    </div>
    <Point
      ref="point"
      :id="'18E'"
      :name="'Base du Sein'"
      :roles="['pouet', 'er']"
      :localization="'A deux cun de la ligne médiane'"
      :picture="'http://orempixum;com'"
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
      isCardVisible: false
    };
  },
  methods: {
    showCard() {
      this.isCardVisible = !this.isCardVisible;
      this.$refs.point.changeVisibility(this.isCardVisible);
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
