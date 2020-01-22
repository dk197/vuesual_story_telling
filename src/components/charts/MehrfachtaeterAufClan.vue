<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'column',
                    height: '600'
                },
                title: {
                    text: 'Straftaten der Mehrfachtäter'
                },
                xAxis: {
                    categories: ['Clan O', 'Clan E', 'Clan A', 'Clan K', 'Clan S', 'Clan F', 'Clan R', 'Clan Ta', 'Clan I']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Straftaten durch Mehrfachtäter'
                    }
                },
                series: [
                    {
                        name: 'Anzahl Straftaten',
                        data: [564, 340, 264, 208, 205, 196, 188, 154, 138],
                        color: '#700101'
                    },
                    {
                        name: 'Anzahl Mehrfachtäter',
                        data: [43, 30, 19, 18, 16, 13, 12, 12, 14],
                        color: '#1A1A1A'
                    }
                ],
                tooltip: {
                    shared: true
                }
            }
        }
    }
}
</script>