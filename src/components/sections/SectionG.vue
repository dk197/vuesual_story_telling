<template>
    <Wrapper>
        <div class="background1">
            <img class="background" src="../../assets/map.svg">
        <h2 class="heading">Brennpunkte in NRW</h2>
        <div class="map-wrapper">
            <Map></Map>
        </div>
        <div class="right-side">
            <div class="text">
                Eine geodifferenzierte Darstellung der <br>
                Tatorte macht eine Konzentration der <br>
                Clankriminalität auf das Gebiet des <br>
                Ruhrgebiets deutlich.<br>
                Durch das Auswählen eines Jahres sehen <br>
                Sie auf der Karte farblich gekennzeichnet die <br>
                Anzahl der Täter. Klicken Sie auch ein Land <br>
                um einen Gesamtüberblick zu erhalten.<br>
                Bewegen Sie Ihre Maus über das <br>
                Diagramm für genauere Informationen. <br>

                <img id="img" src="../../assets/note.svg">
            </div>
            <div class="chart">
                <StraftatenUndTatverdaechtige v-show="showBarChart" :series="series"></StraftatenUndTatverdaechtige>
            </div>
            
        </div>
        
        </div>
        <div class="shape-white"> </div>
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Map from "../charts/map";
import StraftatenUndTatverdaechtige from '../charts/StraftatenUndTatverdaechtige'
import { EventBus } from '../../others/eventBus'

export default {
    data() {
        return {
            showBarChart: false,
            series: [],
            tableData: {
                Steinfurt: {
                    row1: [55, 49, 49],
                    row2: [41, 39, 40]
                },
                Euskirchen: {
                    row1: [66, 39, 37],
                    row2: [44, 30, 30]
                },
                StädteregionAachen: {
                    row1: [107, 72, 74],
                    row2: [67, 69, 62]
                },
                Bielefeld: {
                    row1: [51, 57, 76],
                    row2: [30, 30, 40]
                },
                Bochum: {
                    row1: [220, 247, 315],
                    row2: [137, 153, 166]
                },
                Bonn: {
                    row1: [103, 85, 208],
                    row2: [60, 56, 68]
                },
                Borken: {
                    row1: [102, 80, 95],
                    row2: [64, 56, 60]
                },
                Coesfeld: {
                    row1: [47, 108, 40],
                    row2: [22, 36, 32]
                },
                Dortmund: {
                    row1: [231, 280, 192],
                    row2: [166, 185, 132]
                },
                Duisburg: {
                    row1: [286, 267, 237],
                    row2: [155, 199, 165]
                },
                Düren: {
                    row1: [30, 25, 43],
                    row2: [23, 23, 28]
                },
                Düsseldorf: {
                    row1: [138, 133, 129],
                    row2: [113, 107, 108]
                },
                EnnepeRuhrKreis: {
                    row1: [29, 29, 27],
                    row2: [19, 26, 24]
                },
                Essen: {
                    row1: [842, 867, 730],
                    row2: [568, 619, 540]
                },
                Gelsenkirchen: {
                    row1: [385, 376, 335],
                    row2: [245, 253, 268]
                },
                Gütersloh: {
                    row1: [36, 51, 33],
                    row2: [34, 30, 29]
                },
                Hagen: {
                    row1: [40, 35, 27],
                    row2: [29, 31, 24]
                },
                Hamm: {
                    row1: [21, 39, 26],
                    row2: [21, 27, 21]
                },
                Heinsberg: {
                    row1: [31, 56, 36],
                    row2: [20, 33, 15]
                },
                Herford: {
                    row1: [34, 44, 37],
                    row2: [24, 23, 33]
                },
                Hochsauerlandkreis: {
                    row1: [12, 24, 25],
                    row2: [11, 19, 17]
                },
                Höxter: {
                    row1: [8, 8, 9],
                    row2: [7, 9, 4]
                },
                Kleve: {
                    row1: [14, 27, 42],
                    row2: [14, 18, 29]
                },
                Köln: {
                    row1: [217, 187, 183],
                    row2: [153, 128, 149]
                },
                Krefeld: {
                    row1: [62, 57, 65],
                    row2: [52, 40, 44]
                },
                Lippe: {
                    row1: [50, 42, 47],
                    row2: [32, 35, 32]
                },
                MärkischerKreis: {
                    row1: [93, 83, 78],
                    row2: [55, 52, 50]
                },
                Mettmann: {
                    row1: [94, 124, 109],
                    row2: [71, 78, 65]
                },
                MindenLübbecke: {
                    row1: [42, 71, 78],
                    row2: [38, 42, 43]
                },
                Mönchengladbach: {
                    row1: [58, 66, 45],
                    row2: [40, 41, 30]
                },
                Münster: {
                    row1: [93, 72, 36],
                    row2: [41, 48, 34]
                },
                OberbergischerKreis: {
                    row1: [38, 6, 11],
                    row2: [18, 6, 9]
                },
                Oberhausen: {
                    row1: [103, 115, 123],
                    row2: [73, 89, 72]
                },
                Olpe: {
                    row1: [16, 16, 10],
                    row2: [9, 7, 5]
                },
                Paderborn: {
                    row1: [29, 44, 27],
                    row2: [25, 28, 20]
                },
                Recklinghausen: {
                    row1: [324, 419, 348],
                    row2: [249, 297, 265]
                },
                RheinErftKreis: {
                    row1: [46, 49, 57],
                    row2: [30, 28, 31]
                },
                RheinischBergischerKreis: {
                    row1: [27, 15, 12],
                    row2: [17, 11, 11]
                },
                RheinKreisNeuss: {
                    row1: [35, 36, 42],
                    row2: [30, 28, 31]
                },
                RheinSiegKreis: {
                    row1: [18, 14, 15],
                    row2: [18, 13, 13]
                },
                SiegenWittgenstein: {
                    row1: [65, 50, 54],
                    row2: [38, 23, 33]
                },
                Soest: {
                    row1: [96, 132, 71],
                    row2: [55, 47, 37]
                },
                Unna: {
                    row1: [43, 73, 68],
                    row2: [41, 63, 37]
                },
                Viersen: {
                    row1: [40, 28, 30],
                    row2: [22, 23, 24]
                },
                Warendorf: {
                    row1: [34, 33, 33],
                    row2: [24, 24, 23]
                },
                Wesel: {
                    row1: [62, 64, 95],
                    row2: [52, 58, 61]
                },
                Wuppertal: {
                    row1: [116, 147, 136],
                    row2: [89, 106, 88]
                },
                Leverkusen: {
                    row1: [0, 0, 0],
                    row2: [0, 0, 0]
                },
                Solingen: {
                    row1: [0, 0, 0],
                    row2: [0, 0, 0]
                },
                Bottrop: {
                    row1: [0, 0, 0],
                    row2: [0, 0, 0]
                },
                Remscheid: {
                    row1: [0, 0, 0],
                    row2: [0, 0, 0]
                },
                Herne: {
                    row1: [0, 0, 0],
                    row2: [0, 0, 0]
                },
                MülheimanderRuhr: {
                    row1: [0, 0, 0],
                    row2: [0, 0, 0]
                }
            }
        }
    },
    components: {
        Wrapper,
        Map,
        StraftatenUndTatverdaechtige,
    },
    created() {
        EventBus.$on('mapSelected', value => {
            value = value.replace(/\s/g, '');
            value = value.replace(/-/g, '');

            if(value.includes('-')) {
                value = value.replace(/-/g, '_');
            }

            this.series = [
                {
                    name: 'Straftaten',
                    // data: [this.tableData[value].straft.year1, this.tableData[value].tatverd.year1]
                    data: this.tableData[value].row1,
                    color: '#700101'
                },
                {
                    name: 'Tatverdächtige',
                    // data: [this.tableData[value].straft.year2, this.tableData[value].tatverd.year2]
                    data: this.tableData[value].row2,
                    color: '#1A1A1A'
                }
            ]
            this.showBarChart = true
            this.currentComponent = 'EmptyTestComponent'

            document.getElementById('img').style.opacity = '0';
        })
    },
    methods: {
        getDataOfBezirk(bezirk) {
            console.log(this.tableData[bezirk]);
        }
    }
};
</script>

<style scoped>
.map-wrapper {
    float: left;
    margin-right: 100px; 
}
.right-side{
    height: 700px;
}
.right-side .text {
    padding-top: 50px;
    padding-left: 745px;
    margin-bottom: 20px;
}

.text {
    position: relative;
    z-index: -97;
}
.background1 {
    position: relative;
}
.background {
    position: absolute;
    height: 1990px;
    transform: rotate(-1deg);
    top: -455px;
    left: 12px;
    z-index: -99;
    opacity: 0.3;
}
.text > img {
    position: absolute;
    bottom: -50%;
    
}

.shape-white {
    position: absolute;
    right: 100px;
    top:0;
    width: 400px;
    height: 1000px;
    background-color: white;
    z-index: -98;
    opacity: 0.7
}

</style>
