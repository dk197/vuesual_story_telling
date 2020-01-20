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
                    row1: [55, 49, 49],
                    row2: [41, 39, 40]
                },
                Euskirchen: {
                    row1: [66, 39, 37],
                    row2: [44, 30, 30]
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
                    name: 'Straftaten',
                    // data: [this.tableData[value].straft.year1, this.tableData[value].tatverd.year1]
                    data: this.tableData[value].row1,
                    color: '#700101'
                },
                {
                    name: 'Tatverdächtige',
                    // data: [this.tableData[value].straft.year2, this.tableData[value].tatverd.year2]
                    data: this.tableData[value].row2,
                    color: '#1A1A1A'
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
