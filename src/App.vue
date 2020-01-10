<template>
    <div id="page">
        <Header></Header>
        <SectionA></SectionA>
        <SectionB></SectionB>
        <SectionC></SectionC>
        <SectionD></SectionD>
        <SectionE></SectionE>
        <SectionF></SectionF>
        <SectionG></SectionG>
        <SectionH></SectionH>
        <!-- <Test></Test> -->
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SectionA from "./components/sections/SectionA.vue";
import SectionB from "./components/sections/SectionB.vue";
import SectionC from "./components/sections/SectionC.vue";
import SectionD from "./components/sections/SectionD.vue";
import SectionE from "./components/sections/SectionE.vue";
import SectionF from "./components/sections/SectionF.vue";
import SectionG from "./components/sections/SectionG.vue";
import SectionH from "./components/sections/SectionH.vue";
// import Test from "./components/charts/test";

export default {
    components: {
        Header,
        Footer,
        SectionA,
        SectionB,
        SectionC,
        SectionD,
        SectionE,
        SectionF,
        SectionG,
        SectionH,
        // Test
    }
};
</script>

<style>
#page {
  /* position: relative; */
}
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
