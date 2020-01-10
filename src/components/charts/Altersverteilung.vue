<template>
    <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import DataParser from "../../mixins/dataParserMixin";
export default {
    mixins: [DataParser],
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
        DataParser.getDataFromCsv('altersverteilung')
    }
};
</script>

<style scoped>
</style>