<template>
    <div class="chart-container">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'pie',
                    backgroundColor: 'transparent',
                    height: '290',
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
                    margin: 0,
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
                        showInLegend: true,
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
                series: [{
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
            }
        };
    }
};
</script>

<style scoped>
    .chart-container {
        width: 450px;
    }
</style>