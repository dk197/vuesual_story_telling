<template>
    <full-page :options="options" id="fullpage">
        <Header></Header>
        <SectionA></SectionA>
        <SectionB></SectionB>
        <SectionC></SectionC>
        <SectionD></SectionD>
        <SectionE></SectionE>
        <SectionF></SectionF>
        <SectionG></SectionG>
        <Footer></Footer>
    </full-page>
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
import { EventBus } from './others/eventBus'

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
        SectionG
    },
    name: "app",
    data() {
        return {
            options: {
                licenseKey: "YOUR_KEY_HERE",
                navigation: true,
                navigationPosition: "left",
                setAllowScrolling: true,
                navigationTooltips: [
                    "",
                    "Die Studie",
                    "Die Clans",
                    "Die Tatverdächtigen",
                    "Straftaten und ihre Täter",
                    "Mehr zu den Mehrfachtätern",
                    "Die Kriminalitätsbereiche",
                    "Brennpunkte in NRW",
                    ""
                ],
                showActiveTooltip: true,
                anchors: [
                    "Home",
                    "page2",
                    "page3",
                    "page4",
                    "page5",
                    "page6",
                    "page7",
                    "page8",
                    "Footer"
                ],
                scrollHorizontally: true,
                onLeave: this.leaveSection,
                onSlideLeave: this.leaveSlide
            }
        };
    },
    methods: {
        leaveSection(origin, destination) {
			const event = {
				origin: origin.anchor, 
				destination: destination.anchor
			}
			EventBus.$emit('sectionChange', event)
        },
        leaveSlide(section, origin, destination, direction) {
            const event = {
                section: section.anchor,
                origin: origin.index,
                destination: destination.index
            }
			EventBus.$emit('slideChange', event)
			/*eslint no-unused-vars: 0*/
        }
    },
    mounted() {
        const x = document.body.children
        x.forEach(element => {
            if(element.innerHTML.substring(0, 31) === '<a href="http://alvarotrigo.com') {
                element.style.display = 'none'
            }
        });
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
    font-size: 60px;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    position: relative;
}

.heading:after {
    content: "";
    height: 5px;
    width: 150px;
    background-color: #b70404;
    position: absolute;
    left: 0;
    bottom: 0;
}

.fp-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.fp-tableCell {
    vertical-align: top;
}

#fp-nav ul li {
    width: 25px;
    height: 25px;
}

#fp-nav ul li a span,
#fp-nav ul li a.active span {
    height: 20px;
    width: 20px;
    margin: -10px 0 0 -10px;
    background-color: white;
}

#fp-nav ul li a.active span {
    background-color: #700101;
}

#fp-nav ul li:hover {
    height: 25px;
    width: 25px;
}

#fp-nav ul li:hover a span,
#fp-nav ul li:hover a.active span {
    height: 20px;
    width: 20px;
    margin: -10px 0 0 -10px;
}

#fp-nav ul li .fp-tooltip.fp-left {
    left: 33px;
    top: 2px;
    font-size: 17.5px;
}

.fp-viewing-Home > #fp-nav,
.fp-viewing-Footer > #fp-nav,
.highcharts-credits {
    display: none;
}

p,
h2,
h3 {
    color: #0d1321;
}

.fp-viewing-Home > .fullpage-wrapper {
      transform: translate3d(0px, 0px, 0px) !important;
}
</style>
