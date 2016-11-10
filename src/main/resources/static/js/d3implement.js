/**
 * Created by azafirov on 11/4/2016.
 */

myApp.directive('barsChart', BarsChart);
function BarsChart() {
    return {
        restrict: 'E',
        replace: false,
        scope:
            {data: '=chartData'},
        link: function (scope, element, attrs) {
            var chart = d3.select(element[0]);
            chart.append("div").attr("class", "chart")
                .selectAll('div')
                .data(scope.data).enter().append("div")
                .transition().ease("elastic")
                .style("width", function(d) { return d + "%"; })
                .text(function(d) { return d + "%"; });
            console.log("d3");
        }
    };
};
