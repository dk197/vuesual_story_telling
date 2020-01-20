<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
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
</style>