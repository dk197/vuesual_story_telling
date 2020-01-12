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
                            y: 2
                        },
                        {
                            name: 'staatenlos',
                            y: 3
                        },
                        {
                            name: 'deutsch',
                            y: 36
                        },
                        {
                            name: 'libanesisch',
                            y: 31
                        },
                        {
                            name: 'türkisch',
                            y: 15
                        },
                        {
                            name: 'syrisch',
                            y: 13
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