/**
 * Created by azafirov on 11/4/2016.
 */
console.log('-Z-A-Z-');
myApp.controller('monitoringDashC', function ($scope) {
    var options;
    // Highcharts.chart('container1', {
    //
    //     title: {
    //         text: 'Test Chart'
    //     },
    //
    //     xAxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //     },
    //
    //     series: [{
    //         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    //     }]
    // });
    
    options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'SONAR Unit Test Coverage'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Unit Test Coverage %'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [ {
            name: 'Not covered',
            data: [2, 2, 3, 2, 1]
        },
        {
            name: 'Coverage',
            data: [5, 3, 4, 7, 2]
        }
        ]
    };

    Highcharts.chart('container2', options);
});