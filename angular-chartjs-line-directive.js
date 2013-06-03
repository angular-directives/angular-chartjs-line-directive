/*!
 * AngularJS Chart.js Line Directive
 *
 * Copyright 2013 Stephane Begaudeau
 * Released under the MIT license
 */
angular.module('angular.directives-chartjs-line', []).directive('angChartjsLine', [function () {
  var compilationFunction = function (templateElement, templateAttributes, transclude) {
    if (templateElement.length === 1) {
      var node = templateElement[0];

      var width = node.getAttribute('data-chartjs-width') || '400';
      var height = node.getAttribute('data-chartjs-height') || '400';

      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      canvas.setAttribute('data-chartjs-model', node.getAttribute('data-chartjs-model'));

      var options = {};

      var potentialOptions = [
        {key:'data-chartjs-scale-overlay', value:'scaleOverlay', isBoolean: true},
        {key:'data-chartjs-scale-override', value:'scaleOverride', isBoolean: true},
        {key:'data-chartjs-scale-steps', value:'scaleSteps', isNumber: true},
        {key:'data-chartjs-scale-step-width', value:'scaleStepWidth', isNumber: true},
        {key:'data-chartjs-scale-start-value', value:'scaleStartValue', isNumber: true},
        {key:'data-chartjs-scale-line-color', value:'scaleLineColor'},
        {key:'data-chartjs-scale-line-width', value:'scaleLineWidth', isNumber: true},
        {key:'data-chartjs-scale-show-labels', value:'scaleShowLabels', isBoolean: true},
        {key:'data-chartjs-scale-label', value:'scaleLabel'},
        {key:'data-chartjs-scale-font-family', value:'scaleFontFamily'},
        {key:'data-chartjs-scale-font-size', value:'scaleFontSize', isNumber: true},
        {key:'data-chartjs-scale-font-style', value:'scaleFontStyle'},
        {key:'data-chartjs-scale-font-color', value:'scaleFontColor'},
        {key:'data-chartjs-scale-show-grid-lines', value:'scaleShowGridLines', isBoolean: true},
        {key:'data-chartjs-scale-grid-line-color', value:'scaleGridLineColor'},
        {key:'data-chartjs-scale-grid-line-width', value:'scaleGridLineWidth', isNumber: true},
        {key:'data-chartjs-bezier-curve', value:'bezierCurve', isBoolean: true},
        {key:'data-chartjs-point-dot', value:'pointDot', isBoolean: true},
        {key:'data-chartjs-point-dot-radius', value:'pointDotRadius', isNumber: true},
        {key:'data-chartjs-point-dot-width', value:'pointDotStrokeWidth', isNumber: true},
        {key:'data-chartjs-dataset-stroke', value:'datasetStroke', isBoolean: true},
        {key:'data-chartjs-dataset-stroke-width', value:'datasetStrokeWidth', isNumber: true},
        {key:'data-chartjs-dataset-fill', value:'datasetFill', isBoolean: true},
        {key:'data-chartjs-animation', value:'animation', isBoolean: true},
        {key:'data-chartjs-animation-steps', value:'animationSteps', isNumber: true},
        {key:'data-chartjs-animation-easing', value:'animationEasing'}
      ];

      for (var i = 0; i < potentialOptions.length; i++) {
        var aKey = node.getAttribute(potentialOptions[i].key);
        if (aKey && potentialOptions[i].isBoolean) {
          if ('true' === aKey) {
            options[potentialOptions[i].value] = true;
          } else if ('false' === aKey) {
            options[potentialOptions[i].value] = false;
          }
        } else if (aKey && potentialOptions[i].isNumber) {
          options[potentialOptions[i].value] = parseInt(aKey);
        }else if (aKey) {
          options[potentialOptions[i].value] = aKey;
        }
      }

      var chart = new Chart(canvas.getContext('2d'));
      node.parentNode.replaceChild(canvas, node);

      return {
        pre: function preLink(scope, instanceElement, instanceAttributes, controller) {
          var expression = canvas.getAttribute('data-chartjs-model');
          scope.$watch(expression, function (newValue, oldValue) {
            var callback = scope[node.getAttribute('data-chartjs-on-animation-complete')];
            if (callback !== undefined) {
              options.onAnimationComplete = callback;
            }

            chart.Line(newValue, options);
          }, true);
        },
        post: function postLink(scope, instanceElement, instanceAttributes, controller) {}
      };
    }
  };

  var chartjsLine = {
    compile: compilationFunction,
    replace: true
  };
  return chartjsLine;
}]);
