/**
 * Created by azafirov on 11/4/2016.
 */
myApp.controller('monitoringDashC', function($scope, $http, $log) {
    $scope.welcomeMessage = "Monitoring Dash Application";
    //fetch widgets from sonar-service
    $http.get(proxyUrl + "/sonar-service" + "/sonar/widgets/").then(function (response) {
        $scope.allSonarWidgets = response.data;
    });

    // for d3
    $scope.myData = [10,20,30,40,60, 80, 20, 70];

    //fetch widgets from jira-service
    // $http.get(proxyUrl + "/jira-service" + "/jira/widgets/").then(function (response) {
    //     $scope.allJiraWidgets = response.data;
    // });
});