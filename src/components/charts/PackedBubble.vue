<template>
    <div class="" style="float: left">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'packedbubble',
                    height: '500px'
                },
                title: {
                    text: 'Straftaten auf Clanebene betrachtet'
                },
                tooltip: {
                    useHTML: true,
                    pointFormat: '<b>{point.value}</b> Straftaten'
                },
                plotOptions: {
                    packedbubble: {
                        maxSize: '120%',
                        zMin: 0,
                        zMax: 2000,
                        layoutAlgorithm: {
                            splitSeries: false,
                            gravitationalConstant: 0.02
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}',
                            style: {
                                color: 'white',
                                textOutline: 'none',
                                fontWeight: 'normal'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Clan O',
                    data: [{
                        name: 'Clan O',
                        value: 1738
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                }, {
                    name: 'Clan E',
                    data: [{
                        name: "Clan E",
                        value: 1017
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                }, {
                    name: 'Clan A',
                    data: [{
                        name: "Clan A",
                        value: 680
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                }, {
                    name: 'CLan K',
                    data: [{
                        name: "Clan K",
                        value: 585
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                }, {
                    name: 'Clan S',
                    data: [{
                        name: "Clan S",
                        value: 539
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                },{
                    name: 'Clan Y',
                    data: [{
                        name: "Clan Y",
                        value: 481,
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                },{
                    name: 'Clan I',
                    data: [{
                        name: "Clan I",
                        value: 473
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                },{
                    name: 'Clan F',
                    data: [{
                        name: "Clan F",
                        value: 459
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                },{
                    name: 'Clan M',
                    data: [{
                        name: "Clan M",
                        value: 455
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                },{
                    name: 'Clan T',
                    data: [{
                        name: "Clan T",
                        value: 409
                    }],
                    color : '#700101',
                    marker: {
                        fillOpacity: 1
                    }
                }]
            }
        }
    }
};
</script>

<style scoped>


</style>