<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
        <!-- <p>test2</p> -->
    </div>
    <!-- <p>{{ chartData }}</p> -->
</template>

<script>
export default {
    // props: {
    //     series: {
    //         type: Array,
    //         default: function() {
    //             return [{
    //                 name: 'Year 1800',
    //                 data: [107, 31, 635, 203, 2]
    //             }, {
    //                 name: 'Year 1900',
    //                 data: [133, 156, 947, 408, 6]
    //             }, {
    //                 name: 'Year 2000',
    //                 data: [814, 841, 3714, 727, 31]
    //             }, {
    //                 name: 'Year 2016',
    //                 data: [1216, 1001, 4436, 738, 40]
    //             }]
    //         }
    //     },
    //     categories: {
    //         type: Array,
    //         default: function() {
    //             return [
    //                 'Africa', 'America', 'Asia', 'Europe', 'Oceania'
    //             ]
    //         }
    //     }
    // },
    props: ['series'],
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'column'
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
        series(newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal);
            this.chartOptions.series = newVal
        }
    },
    methods: {
        // updateSeries() {
        //     this.chartOptions.series = 
        // }
    },
    mounted() {
        console.log(this.chartOptions);
    }
}
</script>