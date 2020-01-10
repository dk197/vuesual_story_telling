<template>
  <Wrapper>
    <h2 class="heading">Die Clans</h2>
    <Map></Map>
  </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Map from "../charts/map";

export default {
  components: {
    Wrapper,
    Map
  }
};
</script>

<style scoped>
</style>