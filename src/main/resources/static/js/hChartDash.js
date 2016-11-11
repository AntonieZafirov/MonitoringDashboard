/**
 * Created by azafirov on 11/4/2016.
 */
myApp.controller('monitoringDashC', function($scope, $http, $log, $timeout, $interval) {

    function loadData() {
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/1/chart").then(function (response) {
            var options = response.data;
            Highcharts.chart('container1', options);
        });
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/6/chart").then(function (response) {
            var options = response.data;
            Highcharts.chart('container2', options);
        });
        $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/7/chart").then(function (response) {
            Highcharts.chart('container3', response.data);
        });
    }

    loadData();
    $interval(loadData, 60000);

});