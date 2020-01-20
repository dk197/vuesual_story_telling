<template>
    <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
</template>

<script>
import json from "./de-nw-all.geo.json";
import { EventBus } from '../../others/eventBus'
export default {
    data() {
        return {
            mapOptions: {
                chart: {
                    map: json,
                    width: 800
                },

                colorAxis: {
                    min: 0,
                    maxColor: '#700101'
                },
                series: [
                    {
                        data: [
                            ["de-nw-05334000", 253],
                            ["de-nw-05914000", 102],
                            ["de-nw-05978000", 184],
                            ["de-nw-05754000", 120],
                            ["de-nw-05758000", 115],
                            ["de-nw-05314000", 396],
                            ["de-nw-05370000", 123],
                            ["de-nw-05162000", 113],
                            ["de-nw-05166000", 98],
                            ["de-nw-05915000", 86],
                            ["de-nw-05558000", 195],
                            ["de-nw-05962000", 254],
                            ["de-nw-05954000", 85],
                            ["de-nw-05374000", 55],
                            ["de-nw-05124000", 399],
                            ["de-nw-05974000", 299],
                            ["de-nw-05119000", 341],
                            ["de-nw-05170000", 221],
                            //Remscheidt fehlt
                            ["de-nw-05120000", 0],
                            //Solingen fehlt
                            ["de-nw-05122000", 0],
                            ["de-nw-05112000", 790],
                            ["de-nw-05911000", 782],
                            ["de-nw-05562000", 1091],
                            ["de-nw-05358000", 98],
                            ["de-nw-05378000", 54],
                            ["de-nw-05158000", 327],
                            ["de-nw-05315000", 587],
                            //Leverkusen fehlt
                            ["de-nw-05316000", 0],
                            ["de-nw-05113000", 2439],
                            //Bottrop fehlt
                            ["de-nw-05512000", 0],
                            ["de-nw-05913000", 703],
                            ["de-nw-05513000", 1096],
                            ["de-nw-05114000", 184],
                            ["de-nw-05766000", 139],
                            ["de-nw-05970000", 169],
                            ["de-nw-05566000", 153],
                            ["de-nw-05116000", 169],
                            ["de-nw-05570000", 100],
                            ["de-nw-05711000", 184],
                            ["de-nw-05966000", 42],
                            ["de-nw-05154000", 83],
                            ["de-nw-05762000", 25],
                            ["de-nw-05958000", 61],
                            ["de-nw-05554000", 277],
                            ["de-nw-05770000", 191],
                            ["de-nw-05382000", 47],
                            ["de-nw-05366000", 147],
                            ["de-nw-05774000", 100],
                            ["de-nw-05515000", 201],
                            //Herne fehlt
                            ["de-nw-05916000", 0],
                            //Müllheim an der Ruhr fehlt
                            ["de-nw-05117000", 0],
                            ["de-nw-05111000", 400],
                            ["de-nw-05362000", 152]
                        ],
                        name: "Anzahl Straftaten",
                        color: '#700101',
                        states: {
                            hover: {
                                color: "#700101"
                            }
                        },
                        // dataLabels: {
                        //     enabled: true,
                        //     format: "{point.name}"
                        // }
                    }
                ],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                click: function() {
                                    EventBus.$emit('mapSelected', this.name)
                                }
                            }
                        }
                    }
                }
            }
        };
    }
};
</script>
 <style scoped>
.map {
    min-height: 500px;
}
</style>