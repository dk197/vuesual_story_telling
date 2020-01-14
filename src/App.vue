<template>
        <full-page :options="options" id="fullpage">
             <Header></Header>
            <SectionA></SectionA>
            <SectionB></SectionB>
            <SectionC></SectionC>
            <SectionD></SectionD>
            <SectionE></SectionE>
            <SectionF></SectionF>
            <SectionE></SectionE>
            <SectionF></SectionF>
            <SectionG></SectionG>
            <SectionH></SectionH>
            <Footer></Footer>
        </full-page> 
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SectionA from "./components/sections/SectionA.vue";
import SectionB from "./components/sections/SectionB.vue";
// import Map from "./components/charts/map";
// import Altersverteilung from './components/charts/Altersverteilung';
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
        SectionC,
        SectionD,
        SectionE,
        SectionF,
        SectionG,
        SectionH,
    },
    name: 'app',
    data () {
      return {
        options: {
          licenseKey: 'YOUR_KEY_HERE',
          navigation: true,
          navigationPosition: 'left',
          navigationTooltips: ['', 'Die Studie', 'Die Clans', 'SectionC', 'SectionD', 'SectionE', 'SectionF', 'SectionG', 'SectionH', ''],
          showActiveTooltip: true,
          anchors: ['Home', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'Footer'],
          // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab', '#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6',]
        }
      }
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

.fp-section {
  position: relative;
}
</style>
