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