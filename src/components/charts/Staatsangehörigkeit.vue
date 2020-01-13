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
                    text: 'Staatsangehörigkeit der Tatverdächtigen'
                },
                series: [{
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
            }
        };
    }
};
</script>

<style scoped>
</style>