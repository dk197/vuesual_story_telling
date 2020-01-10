<template>
  <div>
	<Header></Header>
  <SectionA></SectionA>
  <SectionB></SectionB>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SectionA from "./components/sections/SectionA.vue";
import SectionB from "./components/sections/SectionB.vue";

export default {
    components: {
      Header,
      SectionA,
      SectionB
    }
};
</script>

<style>
body {
    background-color: white;
    margin: 0 !important;
    font-family: 'Muli';
    color: #0D1321;
}

.heading {
    font-family: 'Jost';
    font-size: 100px;
    text-transform: uppercase;
    font-weight: bold;
    width: 550px;
}

</style>
