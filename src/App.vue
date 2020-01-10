<template>
        <full-page :options="options" id="fullpage">
             <Header></Header>
            <SectionA></SectionA>
            <SectionB></SectionB>
            <Test></Test>
        </full-page> 
</template>

<script>
import Header from "./components/Header.vue";
import SectionA from "./components/sections/SectionA.vue";
import SectionB from "./components/sections/SectionB.vue";
import Test from "./components/charts/test";

export default {
    components: {
        Header,
        SectionA,
        SectionB,
        Test
    },
    name: 'app',
    data () {
      return {
        options: {
          licenseKey: 'YOUR_KEY_HERE',
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    }
};
</script>

<style>
body {
    background-color: white;
    margin: 0 !important;
    font-family: "Muli";
    color: #0d1321;
}

.heading {
    font-family: "Jost";
    font-size: 100px;
    text-transform: uppercase;
    font-weight: bold;
    width: 550px;
}
</style>
