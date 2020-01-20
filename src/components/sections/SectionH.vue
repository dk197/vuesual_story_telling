<template>
    <Wrapper>
        <h2 class="heading">Die Clans</h2>
        <Map></Map>
        <!-- <StraftatenUndTatverdaechtige v-if="showBarChart" :categories="chartData.categories" :series="chartData.series"></StraftatenUndTatverdaechtige> -->
        <component v-bind:is="currentComponent"></component>
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Map from "../charts/map";
import StraftatenUndTatverdaechtige from '../charts/StraftatenUndTatverdaechtige'
import EmptyTestComponent from '../charts/emptyTestComponent'
import { EventBus } from '../../others/eventBus'

export default {
    data() {
        return {
            showBarChart: false,
            currentComponent: 'StraftatenUndTatverdaechtige',
            chartData: {},
            tableData: {
                Steinfurt: {
                    straft: {
                        year1: 107,
                        year2: 72,
                        year3: 74
                    },
                    tatverd: {
                        year1: 67,
                        year2: 69,
                        year3: 62
                    }
                }
            }
        }
    },
    components: {
        Wrapper,
        Map,
        StraftatenUndTatverdaechtige,
        EmptyTestComponent
    },
    created() {
        const x = this
        // EventBus.$on('mapSelected', function(value) {
            EventBus.$on('mapSelected', value => {
            this.getDataOfBezirk(value)
            this.chartData =  {
                categories: ['Straftaten', 'Tatverdächtige'],
                series: [
                    {
                        name: '2016',
                        data: [this.tableData[value].straft.year1, x.tableData[value].tatverd.year1]
                    },
                    {
                        name: '2017',
                        data: [this.tableData[value].straft.year2, x.tableData[value].tatverd.year2]
                    },
                    {
                        name: '2018',
                        data: [this.tableData[value].straft.year3, x.tableData[value].tatverd.year3]
                    }
                ]
            }
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
