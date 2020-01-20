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
                    height: '100%'
                },
                title: {
                    text: 'Carbon emissions around the world (2014)'
                },
                tooltip: {
                    useHTML: true,
                    pointFormat: '<b>{point.value}</b> Straftaten'
                },
                plotOptions: {
                    packedbubble: {
                        maxSize: '120%',
                        zMin: 0,
                        zMax: 1000,
                        layoutAlgorithm: {
                            splitSeries: false,
                            gravitationalConstant: 0.02
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}',
                            style: {
                                color: 'black',
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
                    }]
                }, {
                    name: 'Clan E',
                    data: [{
                        name: "Clan E",
                        value: 1017
                    }]
                }, {
                    name: 'Clan A',
                    data: [{
                        name: "Clan A",
                        value: 680
                    }]
                }, {
                    name: 'CLan K',
                    data: [{
                        name: "Clan K",
                        value: 585
                    }]
                }, {
                    name: 'Clan S',
                    data: [{
                        name: "Clan S",
                        value: 539
                    }]
                },{
                    name: 'Clan Y',
                    data: [{
                        name: "Clan Y",
                        value: 481
                    }]
                },{
                    name: 'Clan I',
                    data: [{
                        name: "Clan I",
                        value: 473
                    }]
                },{
                    name: 'Clan F',
                    data: [{
                        name: "Clan F",
                        value: 459
                    }]
                },{
                    name: 'Clan M',
                    data: [{
                        name: "Clan M",
                        value: 455
                    }]
                },{
                    name: 'Clan T',
                    data: [{
                        name: "Clan T",
                        value: 409
                    }]
                }]
            }
        }
    }
};
</script>

<style scoped>
.highcharts-figure, .highcharts-data-table table {
    min-width: 320px; 
    max-width: 800px;
    margin: 1em auto;
}

.highcharts-data-table table {
	font-family: Verdana, sans-serif;
	border-collapse: collapse;
	border: 1px solid #EBEBEB;
	margin: 10px auto;
	text-align: center;
	width: 100%;
	max-width: 500px;
}
.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
    padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
    padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}
.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

</style>