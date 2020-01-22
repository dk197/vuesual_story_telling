<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { EventBus } from "../../others/eventBus";
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'heatmap',
                    animation: true
                },
                title: {
                    text: 'Straftaten nach Kriminalitätsfeld und Deliktsbereich'
                },
                xAxis: [
                    {
                        categories: ['Clan O','Clan E', 'Clan A', 'Clan K', 'Clan S', 'Clan Y', 'Clan I', 'Clan F', 'Clan M', 'Clan T'],
                        opposite: true
                    },
                    {
                        linkedTo: 0,
                        opposite: false,
                        categories: [1738, 1017, 680, 585, 539, 480, 473, 459, 455, 409],
                        labels: {
                            autoRotationLimit: 0
                        }
                    }
                ],
                yAxis: [
                    {
                        categories: ['Antragsdelikte', 'Ausländerrecht', 'Betrugs- und Fälschungsdelikte', 'Eigentumsdelikte', 'Rohheitsdelikte', 'Politisch motivierte Delikte', 'Rauschgiftdelikte', 'Sexualkriminalität', 'Sonstige Kriminalität', 'Steuer- und Zolldelikte', 'Waffenrecht', 'Wirtschaftskriminalität'],
                        title: null
                    },
                    {
                        linkedTo: 0,
                        opposite: true,
                        categories: [721, 36, 1214, 1105, 2866, 8, 429, 77, 297, 9, 64, 9],
                        title: null
                    }
                ],
                colorAxis: {
                    min: 0,
                    minColor: '#F2EAEA',
                    maxColor: '#700101'
                },
                series: []
            }
        };
    },
    created() {
        EventBus.$on('slideChange', value => {
            if(value === 'page7') {
                this.chartOptions.series = [{
                    data: [
                        [0,0,194],[0,1,4],[0,2,278],[0,3,300],[0,4,768],[0,5,0],[0,6,77],[0,7,20],[0,8,73],[0,9,2],[0,10,20],[0,11,2],
                        [1,0,120],[1,1,4],[1,2,194],[1,3,134],[1,4,406],[1,5,1],[1,6,60],[1,7,10],[1,8,77],[1,9,0],[1,10,9],[1,11,2],
                        [2,0,101],[2,1,0],[2,2,104],[2,3,100],[2,4,307],[2,5,2],[2,6,35],[2,7,3],[2,8,20],[2,9,3],[2,10,4],[2,11,1],
                        [3,0,65],[3,1,3],[3,2,107],[3,3,106],[3,4,244],[3,5,1],[3,6,24],[3,7,7],[3,8,21],[3,9,0],[3,10,7],[3,11,0],
                        [4,0,67],[4,1,2],[4,2,80],[4,3,84],[4,4,246],[4,5,0],[4,6,29],[4,7,4],[4,8,19],[4,9,1],[4,10,7],[4,11,0],
                        [5,0,54],[5,1,1],[5,2,92],[5,3,85],[5,4,172],[5,5,0],[5,6,50],[5,7,6],[5,8,13],[5,9,1],[5,10,5],[5,11,1],
                        [6,0,24],[6,1,11],[6,2,85],[6,3,91],[6,4,174],[6,5,1],[6,6,56],[6,7,12],[6,8,14],[6,9,0],[6,10,5],[6,11,0],
                        [7,0,42],[7,1,0],[7,2,107],[7,3,70],[7,4,183],[7,5,1],[7,6,16],[7,7,4],[7,8,33],[7,9,0],[7,10,2],[7,11,1],
                        [8,0,25],[8,1,11],[8,2,81],[8,3,87],[8,4,196],[8,5,1],[8,6,24],[8,7,8],[8,8,17],[8,9,2],[8,10,2],[8,11,1],
                        [9,0,29],[9,1,0],[9,2,86],[9,3,48],[9,4,170],[9,5,1],[9,6,58],[9,7,3],[9,8,10],[9,9,0],[9,10,3],[9,11,1],
                    ],
                    dataLabels: {
                        enabled: true,
                        color: '#3E3E3E',
                        style: {
                            textOutline: false 
                        }
                    }
                }]
            }
        })
    }
};
</script>