<template>
    <div>
        <!-- <highcharts :options="chartOptions"></highcharts> -->
        <p>test</p>
    </div>
    <!-- <p>{{ chartData }}</p> -->
</template>

<script>
export default {
    props: ['chartData'],
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Straftaten und Tatverdächtige im zeitlichem Verlauf'
                },
                xAxis: {
                    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']            
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Anzahl'
                    }
                },
                series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
    }]
            }
        }
    },
    created() {
        console.log(this.chartOptions);
    }
}
</script>