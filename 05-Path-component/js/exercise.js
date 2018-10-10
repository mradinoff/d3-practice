var canvas = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500);

var data = [
  {x: 10, y: 20},
  {x: 40, y: 60},
  {x: 50, y: 70}
];
var group = canvas.append("g")
          .attr("transform", "translate(100, 100)");

var line = d3.line()
        .x(function (n) {return n.x})
        .y(function (n) {return n.y});

group.selectAll("path")
  .data([data])
  .enter()
    .append("path")
    .attr("d", line) //d = path descriptors
    .attr("fill", "black")
    .attr("stroke", "#000")
    .attr("stroke-width", 1);
