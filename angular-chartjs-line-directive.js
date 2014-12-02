/*!
 * AngularJS Chart.js Line Directive
 *
 * Copyright 2013 Stephane Begaudeau
 * Released under the MIT license
 */
angular.module('angular.directives-chartjs-line', []).directive('angChartjsLine', [function () {
  var getOptionsFromScope = function (scope) {
    var options = {};

    var potentialOptions = [
      {key:'chartjsScaleOverlay', value:'scaleOverlay', isBoolean: true},
      {key:'chartjsScaleOverride', value:'scaleOverride', isBoolean: true},
      {key:'chartjsScaleSteps', value:'scaleSteps', isNumber: true},
      {key:'chartjsScaleStepWidth', value:'scaleStepWidth', isNumber: true},
      {key:'chartjsScaleStartValue', value:'scaleStartValue', isNumber: true},
      {key:'chartjsScaleLineColor', value:'scaleLineColor'},
      {key:'chartjsScaleLineWidth', value:'scaleLineWidth', isNumber: true},
      {key:'chartjsScaleShowLabels', value:'scaleShowLabels', isBoolean: true},
      {key:'chartjsScaleLabel', value:'scaleLabel'},
      {key:'chartjsScaleFontFamily', value:'scaleFontFamily'},
      {key:'chartjsScaleFontSize', value:'scaleFontSize', isNumber: true},
      {key:'chartjsScaleFontStyle', value:'scaleFontStyle'},
      {key:'chartjsScaleFontColor', value:'scaleFontColor'},
      {key:'chartjsScaleShowGridLines', value:'scaleShowGridLines', isBoolean: true},
      {key:'chartjsScaleGridLineColor', value:'scaleGridLineColor'},
      {key:'chartjsScaleGridLineWidth', value:'scaleGridLineWidth', isNumber: true},
      {key:'chartjsBezierCurve', value:'bezierCurve', isBoolean: true},
      {key:'chartjsPointDot', value:'pointDot', isBoolean: true},
      {key:'chartjsPointDotRadius', value:'pointDotRadius', isNumber: true},
      {key:'chartjsPointDotWidth', value:'pointDotStrokeWidth', isNumber: true},
      {key:'chartjsDatasetStroke', value:'datasetStroke', isBoolean: true},
      {key:'chartjsDatasetStrokeWidth', value:'datasetStrokeWidth', isNumber: true},
      {key:'chartjsDatasetFill', value:'datasetFill', isBoolean: true},
      {key:'chartjsAnimation', value:'animation', isBoolean: true},
      {key:'chartjsAnimationSteps', value:'animationSteps', isNumber: true},
      {key:'chartjsAnimationEasing', value:'animationEasing'}
    ];

    for (var i = 0; i < potentialOptions.length; i++) {
      if (scope.hasOwnProperty(potentialOptions[i].key) && scope[potentialOptions[i].key] !== undefined) {
        options[potentialOptions[i].value] = scope[potentialOptions[i].key];
      }
    }

    return options;
  };

  var chartjsLine = {
    restrict: 'E',
    //compile: compilationFunction,
    template: '<canvas class="ang-chartjs-line"></canvas>',
    scope: {
      chartjsModel: '=',
      chartjsWidth: '=',
      chartjsHeight: '=',
      chartjsScaleOverlay: '=',
      chartjsScaleOverride: '=',
      chartjsScaleSteps: '=',
      chartjsScaleStepWidth: '=',
      chartjsScaleStartValue: '=',
      chartjsScaleLineColor: '=',
      chartjsScaleLineWidth: '=',
      chartjsScaleShowLabels: '=',
      chartjsScaleLabel: '=',
      chartjsScaleFontFamily: '=',
      chartjsScaleFontSize: '=',
      chartjsScaleFontStyle: '=',
      chartjsScaleFontColor: '=',
      chartjsScaleShowGridLine: '=',
      chartjsScaleGridLineColor: '=',
      chartjsScaleGridLineWidth: '=',
      chartjsBezierCurve: '=',
      chartjsPointDot: '=',
      chartjsPointDotRadius: '=',
      chartjsDatasetStroke: '=',
      chartjsDatasetStrokeWidth: '=',
      chartjsDatasetFill: '=',
      chartjsAnimation: '=',
      chartjsAnimationSteps: '=',
      chartjsAnimationEasing: '='
    },
    link: function (scope, elements, attributes) {
      scope.$watch('chartjsModel', function (newValue) {
        if (newValue !== undefined) {
          var options = getOptionsFromScope(scope);

          if (scope.chart !== undefined) {
            scope.chart.Line(newValue, options);
          } else {
            var width = scope.chartjsWidth || '400';
            var height = scope.chartjsHeight || '400';

            var canvas = elements[0].children[0];
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);

            var chart = new Chart(canvas.getContext('2d'));
            chart.Line(newValue, options);
            scope.chart = chart;
          }
        }
      }, true);
    }
  };
  return chartjsLine;
}]);
