# Angular Chartjs Line Directive

This directive let you use a chartjs line thanks to an AngularJS directive.

## Requirements
- Chartjs: http://www.chartjs.org

Load Chart.js and this directive with the following code:
```html
<script type="text/javascript" src="Chart.js"></script>
<script type="text/javascript" src="angular-chartjs-line-directive.js"></script>
```

The latest version of chartjs can be found on its official website:
http://www.chartjs.org

Add a dependency to the module in your own module.
```js
var myModule = angular.module('MyModule', ['angular.directives-chartjs-line']);
```

Use the directive in your HTML files with the following code:
```html
<div ang:chartjs:line data-chartjs-model="scopeVariableName"/>
```
### Parameters
- data-chartjs-model (string: required)
The name of the attribute in the $scope to use as input of the doughnut chart. The attribute in question should have the following structure:

```js
$scope.data = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,27,100]
    }
  ]
};
```

The line chart requires an array of labels for each of the data points. This is show on the X axis. The data for line charts is broken up into an array of datasets. Each dataset has a colour for the fill, a colour for the line and colours for the points and strokes of the points. These colours are strings just like CSS. You can use RGBA, RGB, HEX or HSL notation.

- data-chartjs-scaleOverlay (boolean: default false). If we show the scale above the chart data.
- data-chartjs-scaleOverride (boolean: default false). If we want to override with a hard coded scale.
- data-chartjs-scaleSteps (number: default null). The number of steps in a hard coded scale.
- data-chartjs-scaleStepWidth (number: default null). The value jump in the hard coded scale.
- data-chartjs-scaleStartValue (number: default null). The scale starting value.
- data-chartjs-scaleLineColor (string: default "rgba(0,0,0,.1)"). Colour of the scale line.
- data-chartjs-scaleLineWidth (number: default 1). Pixel width of the scale line.
- data-chartjs-scaleShowLabels (boolean: default false). Whether to show labels on the scale.
- data-chartjs-scaleLabel (Interpolated JS string: default "<%=value%>"). Expression to compute the label.
- data-chartjs-scaleFontFamily (string: default "'Arial'"). Scale label font declaration for the scale label.
- data-chartjs-scaleFontSize (number: default 12). Scale label font size in pixels.
- data-chartjs-scaleFontStyle (string: default "normal"). Scale label font weight style.
- data-chartjs-scaleFontColor (string: default "#666"). Scale label font colour.
- data-chartjs-scaleShowGridLines (boolean: default true). Whether grid lines are shown across the chart.
- data-chartjs-scaleGridLineColor (string: default "rgba(0,0,0,.05)"). Colour of the grid lines.
- data-chartjs-scaleGridLineWidth (number: default 1). Width of the grid lines.
- data-chartjs-bezierCurve (boolean: default true). Whether the line is curved between points.
- data-chartjs-pointDot (boolean: default true). Whether to show a dot for each point.
- data-chartjs-pointDotRadius (number: default 3). Radius of each point dot in pixels.
- data-chartjs-pointDotStrokeWidth (number: default 1). Pixel width of point dot stroke.
- data-chartjs-datasetStroke (boolean: default true). Whether to show a stroke for datasets.
- data-chartjs-datasetStrokeWidth (number: default 2). Pixel width of dataset stroke.
- data-chartjs-datasetFill (boolean: default true). Whether to fill the dataset with a colour.
- data-chartjs-animation (boolean: default true). Whether to animate the chart.
- data-chartjs-animationSteps (number: default 60). Number of animation steps.
- data-chartjs-animation-easing (string: default "easeOutQuart"). Animation easing effect.
- data-chartjs-on-animation-complete (string: default ""). Name of a function from the scope that will be called on animation completion.

A demonstration is visible in the file index.html.

## License
Copyright (c) 2013 Stephane Begaudeau
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Chart.js is available under the MIT license as specified on its github repository: https://github.com/nnnick/Chart.js
