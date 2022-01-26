<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Point
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
};
</script>
