<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { DataParserMixin } from "../../mixins/dataParserMixin";
export default {
    mixins: [DataParserMixin],
    data() {
        return {
            chartOptions: {
                series: [
                    {
                        data: [1, 2, 3] // sample data
                    }
                ]
            }
        };
    },
    mounted() {
        // console.log(this.getDataFromCsv('altersverteilung'))
        this.getDataFromCsv('abb1_StraftatenUndTatverdächtige - Tabellenblatt1.csv').then(function(data) {
            console.log(data);
            
        })
    }
};
</script>

<style scoped>
</style>