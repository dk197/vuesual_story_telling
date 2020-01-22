<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { EventBus } from '../../others/eventBus.js'
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'pie',
                    backgroundColor: 'transparent',
                    width: 500
                },
                title: {
                    text: 'Staatsangehörigkeit der Tatverdächtigen'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                            distance: -50,
                            style: {
                                textOutline: false
                            },
                            filter: {
                                property: 'percentage',
                                operator: '>',
                                value: 4
                            }
                        },
                        showInLegend: true
                    }
                },
                series: []
            }
        };
    },
    created() {
        EventBus.$on('sectionChange', value => {
            if(value.destination === 'page4') {
                this.chartOptions.series = [{
                    name: 'Staatsangehörigkeit',
                    data: [
                        {
                            name: 'ohne Angabe',
                            y: 2,
                            color: '#700101'
                        },
                        {
                            name: 'staatenlos',
                            y: 3,
                            color: '#3E3E3E'
                        },
                        {
                            name: 'deutsch',
                            y: 36,
                            color: '#B70404'
                        },
                        {
                            name: 'libanesisch',
                            y: 31,
                            color: '#0E518D'
                        },
                        {
                            name: 'türkisch',
                            y: 15,
                            color: '#1D2D44'
                        },
                        {
                            name: 'syrisch',
                            y: 13,
                            color: '#0D1321'
                        },
                    ]
                }]
            }else if(value.origin === 'page4') {
                const x = this
                setTimeout(function(){ 
                    x.chartOptions.series = []
                }, 700);
            }
        })
    }
};
</script>

<style scoped>
</style>