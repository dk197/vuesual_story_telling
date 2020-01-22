<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { EventBus } from '../../others/eventBus';
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
                    text: 'Geschlechterverteilung der Tatverdächtigen'
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
                    name: 'Geschlecht',
                    data: [
                        {
                            name: 'männlich',
                            y: 80,
                            color: '#B70404'
                        },
                        {
                            name: 'weiblich',
                            y: 20,
                            color: '#3E3E3E'
                        }
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