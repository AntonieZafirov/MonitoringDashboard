/**
 * Created by azafirov on 11/4/2016.
 */
myApp.controller('monitoringDashC', function($scope, $http, $log, $timeout, $interval) {

    function loadData() {
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/1/chart").then(function (response) {
            var options = response.data;
            Highcharts.chart('container1', options);
        });
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/7/chart").then(function (response) {
            var options = response.data;
            Highcharts.chart('container2', options);
        });

         $http.get(proxyUrl + "/jira-service/jira/widgets/1/data").then(function (response) {
         var openIssues = response.data.openIssues;
         var closedIssues = response.data.closedIssues;
         var inProgressIssues = response.data.inProgressIssues;

         Highcharts.chart('container3', {
           chart: {
               type: 'column'
           },
           title: {
               text: 'CTO Kanban Issues Status'
           },
           xAxis: {
               categories: ['Open', 'Closed', 'In progress']
           },
           yAxis: {
               min: 0,
               title: {
                   text: 'Number of issues'
               },
               stackLabels: {
                   enabled: true,
                   style: {
                       fontWeight: 'bold',
                       color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                   }
               }
           },
           legend: {
               align: 'right',
               x: -30,
               verticalAlign: 'top',
               y: 25,
               floating: true,
               backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
               borderColor: '#CCC',
               borderWidth: 1,
               shadow: false
           },
           tooltip: {
               headerFormat: '<b>{point.x}</b><br/>',
               pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
           },
           plotOptions: {
               column: {
                   stacking: 'normal',
                   dataLabels: {
                       enabled: true,
                       color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                   }
               }
           },
           series: [
           {
               name: 'ISSUES',
               data: [
                {y: openIssues, color: 'red'},
                {y: closedIssues, color: 'yellow'},
                {y: inProgressIssues, color: 'green'}
               ]
           }
           ]
       });
           });


           $http.get(proxyUrl + "/jira-service/jira/widgets/5/data").then(function (response) {

            var normalIssues = response.data.normalIssues;
            var mediumIssues = response.data.mediumIssues;
            var highIssues = response.data.highIssues;
            var criticalIssues = response.data.criticalIssues;
            var blockerIssues = response.data.blockerIssues;
            var majorIssues = response.data.majorIssues;

            Highcharts.chart('container4', {
              chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
              },
              title: {
                  text: 'CTO Kanban Open Issues by Priority'
              },
              tooltip: {
                  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                          enabled: false
                      },
                      showInLegend: true
                  }
              },
              series: [{
                  name: 'Brands',
                  colorByPoint: true,
                  data: [{
                      name: 'Normal',
                      y: normalIssues
                  }, {
                      name: 'Medium',
                      y: mediumIssues,
                      sliced: true,
                      selected: true
                  }, {
                      name: 'High',
                      y: highIssues
                  }, {
                      name: 'Critical',
                      y: criticalIssues
                  }, {
                      name: 'Blocker',
                      y: blockerIssues
                  }, {
                      name: 'Major',
                      y: majorIssues
                  }]
              }]
          });
           });
    }

    loadData();
    $interval(loadData, 60000);

});