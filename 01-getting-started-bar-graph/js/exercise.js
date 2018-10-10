// Creating a simple bar chart

var dataArray = [20, 40, 50, 60];
var width = 500;
var height = 500;

var widthScale = d3.scaleLinear() //result of a linear function
                .domain([0, 100])//defines original range(min, max)
                .range([0, width]);


var color = d3.scaleLinear()
          .domain([0, 60])
          .range(["red", "blue"])

var axis = d3.axisBottom()
          .scale(widthScale)
          .ticks(5); //how many markings there are on the x axis

var canvas = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('g') //g stands for group
            .attr("transform", "translate(50, 50)") // x followed by y

var bars = canvas.selectAll("rect")
          .data(dataArray)
          .enter() //returns placeholder elements (i.e. the rectangles that don't exist) for each data element
            .append("rect")
            .attr("width", function(n) {return widthScale(n); })
            .attr("height", 50)
            .attr("fill", function(n) {return color(n)})
            .attr("y", function(n, i) {return i * 100})

canvas.append("g")
      .attr("transform", "translate (0, 400)")
      .call(axis);
