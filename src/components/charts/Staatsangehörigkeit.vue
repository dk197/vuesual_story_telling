<template>
    <div class="chart-container">
        <highcharts :options="chartOptions"></highcharts>
    </div>
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
                    height: '310',
                    width: '450'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    itemWidth: '120'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        borderColor: 'black',
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
                    },
                    series: {
                            point: {
                                events: {
                                    legendItemClick: function () {
                                        return false; // <== returning false will cancel the default action
                                    }
                                }
                            }
                        }
                   
                },
                series: []
            }
        };
    },
    created() {
        EventBus.$on('slideChange', value => {
            if(value === 'page4') {
                this.chartOptions.series = [{
                    name: 'Staatsangehörigkeit',
                    data: [
                        {
                            name: 'ohne Angabe',
                            y: 2,
                            color: '#0D1321'
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
                            color: '#700101'
                        },
                        {
                            name: 'türkisch',
                            y: 15,
                            color: '#0E518D'
                        },
                        {
                            name: 'syrisch',
                            y: 13,
                            color: '#1D2D44'
                        },
                    ]
                }]
            }
        })
    }
};
</script>

<style scoped>
    .chart-container {
        width: 450px;
    }
</style>