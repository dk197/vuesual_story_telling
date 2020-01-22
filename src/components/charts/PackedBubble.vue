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
                    height: '500',
                    width: '1000'
                },
                legend: {
                   enabled: false,   
                },
                title: {
                    text: ''
                },
                tooltip: {
                    useHTML: true,
                    animation: true,
                    pointFormat: '<b>{point.value}</b> Straftaten',
                    style: {
                        color: '#0D1321',
                        fontSize: '15px',
                        fontFamily: 'Muli',
                    },
                    backgroundColor: 'white',
                    borderWidth: '0'
                },
                plotOptions: {
                    packedbubble: {
                        maxSize: '130%',
                        zMin: 0,
                        zMax: 1000,
                        layoutAlgorithm: {
                            splitSeries: false,
                            gravitationalConstant: 0
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}',
                            style: {
                                color: 'white',
                                textOutline: 'none',
                                fontWeight: 'normal',
                                fontSize: '20px',
                                fontFamily: 'Muli'
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