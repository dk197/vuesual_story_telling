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
                            y: 80
                        },
                        {
                            name: 'weiblich',
                            y: 20
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