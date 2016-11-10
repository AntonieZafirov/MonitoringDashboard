/**
 * Created by azafirov on 11/4/2016.
 */
myApp.controller('monitoringDashC', function($scope, $http, $log, $timeout, $interval) {

    $interval(function () {
        console.log('fetch data');
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/1/chart").then(function (response) {
            var options = response.data;
            Highcharts.chart('container1', options);
        });
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/test/test").then(function (response) {
            Highcharts.chart('container4', response.data);
        });
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/test/6").then(function (response) {
            var options = response.data;
            Highcharts.chart('container2', options);
        });
    }, 60000);

});