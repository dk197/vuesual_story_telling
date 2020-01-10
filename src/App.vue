<template>
    <div id="page">
        <Header></Header>
        <SectionA></SectionA>
        <SectionB></SectionB>
        <Map></Map>
        <Altersverteilung></Altersverteilung>
        <SectionC></SectionC>
        <SectionD></SectionD>
        <SectionE></SectionE>
        <SectionF></SectionF>
        <SectionG></SectionG>
        <SectionH></SectionH>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SectionA from "./components/sections/SectionA.vue";
import SectionB from "./components/sections/SectionB.vue";
import Map from "./components/charts/map";
import Altersverteilung from './components/charts/Altersverteilung';
import SectionC from "./components/sections/SectionC.vue";
import SectionD from "./components/sections/SectionD.vue";
import SectionE from "./components/sections/SectionE.vue";
import SectionF from "./components/sections/SectionF.vue";
import SectionG from "./components/sections/SectionG.vue";
import SectionH from "./components/sections/SectionH.vue";

export default {
    components: {
        Header,
        Footer,
        SectionA,
        SectionB,
        Map,
        Altersverteilung,
        SectionC,
        SectionD,
        SectionE,
        SectionF,
        SectionG,
        SectionH,
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
