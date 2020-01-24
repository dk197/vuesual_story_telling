<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { EventBus } from "../../others/eventBus";
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'column',
                    height: '625'
                },
                title: {
                    text: 'Altersverteilung der Tatverdächtigen'
                },
                xAxis: {
                    categories: [
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65'
                    ],
                    title: {
                        text: 'Alter der Tatverdächtigen'
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Anzahl der Tatverdächtigen'
                    }
                },
                plotOptions: {
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
                series: []
            }
        };
    },
    created() {
        EventBus.$on('sectionChange', value => {
            console.log(value);
            if(value.destination === 'page6') {
                this.chartOptions.series = [{
                    name: 'Anzahl',
                    data: [1, 0, 0, 2, 15, 13, 23, 13, 29, 16, 20, 18, 11, 17, 17, 12, 26, 8, 12, 7, 9, 10, 9, 10, 10, 6, 7, 7, 8, 8, 3, 7, 3, 4, 3, 4, 1, 3, 1, 0, 2, 2, 9, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    color: '#700101'
                }]
            }else if(value.origin === 'page6') {
                const x = this
                setTimeout(function(){ 
                    x.chartOptions.series = []
                }, 700);
            }  
        })
        EventBus.$on('slideChange', value => {
            console.log(value);
            if(value.destination === 'page6') {
                this.chartOptions.series = [{
                    name: 'Anzahl',
                    data: [1, 0, 0, 2, 15, 13, 23, 13, 29, 16, 20, 18, 11, 17, 17, 12, 26, 8, 12, 7, 9, 10, 9, 10, 10, 6, 7, 7, 8, 8, 3, 7, 3, 4, 3, 4, 1, 3, 1, 0, 2, 2, 9, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    color: '#700101'
                }]
            }else if(value.origin === 'page6') {
                const x = this
                setTimeout(function(){ 
                    x.chartOptions.series = []
                }, 700);
            }  
        })
    }
};
</script>

<style scoped>
</style>