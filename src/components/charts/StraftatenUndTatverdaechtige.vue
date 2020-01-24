<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    props: ['series', 'selectedSection'],
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'column',
                    height: 400,
                    width: 380,
                    backgroundColor: 'transparent'
                },
                title: {
                    text: 'Straftaten und Tatverdächtige im zeitlichem Verlauf'
                },
                xAxis: {
                    categories: ['2016', '2017', '2018']       
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Anzahl'
                    }
                },
                series: this.series,
                tooltip: {
                    shared: true
                }
            }
        }
    },
    watch: {
        series(newVal) {
            this.chartOptions.series = newVal
        },
        selectedSection(newVal) {
            this.chartOptions.title.text = `Straftaten und Tatverdächtige im zeitlichem Verlauf von ${newVal}`
        }
    }
}
</script>