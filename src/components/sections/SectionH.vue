<template>
    <Wrapper>
        <h2 class="heading">Die Clans</h2>
        <div style="float: left">
            <Map></Map>
        </div>
        <StraftatenUndTatverdaechtige v-show="showBarChart" :series="series"></StraftatenUndTatverdaechtige>
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Map from "../charts/map";
import StraftatenUndTatverdaechtige from '../charts/StraftatenUndTatverdaechtige'
import { EventBus } from '../../others/eventBus'

export default {
    data() {
        return {
            showBarChart: false,
            series: [],
            tableData: {
                Steinfurt: {
                    row1: [107, 67],
                    row2: [72, 69],
                    row3: [74, 62]
                },
                Euskirchen: {
                    row1: [66, 44],
                    row2: [39, 30],
                    row3: [37, 30]
                }
            }
        }
    },
    components: {
        Wrapper,
        Map,
        StraftatenUndTatverdaechtige,
    },
    created() {
        EventBus.$on('mapSelected', value => {
            console.log(value);
            // value = 'test'
           
            this.series = [
                {
                    name: '2016',
                    // data: [this.tableData[value].straft.year1, this.tableData[value].tatverd.year1]
                    data: this.tableData[value].row1
                },
                {
                    name: '2017',
                    // data: [this.tableData[value].straft.year2, this.tableData[value].tatverd.year2]
                    data: this.tableData[value].row2
                },
                {
                    name: '2018',
                    // data: [this.tableData[value].straft.year3, this.tableData[value].tatverd.year3]
                    data: this.tableData[value].row3
                }
            ]
            this.showBarChart = true
            this.currentComponent = 'EmptyTestComponent'
        })
    },
    methods: {
        getDataOfBezirk(bezirk) {
            console.log(this.tableData[bezirk]);
        }
    }
};
</script>

<style scoped>
</style>
