// creating an arc
var canvas = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500);

var group = canvas.append("g")
          .attr("transform", "translate (250, 250)");

var r = 100;
var p = Math.PI * 2;

var arc = d3.arc() //d3.v3  = d3.svg.arc()
  .innerRadius(r - 20)
  .outerRadius(r)
  .startAngle(0)
  .endAngle(p - 1) //minus 1 radian
  //d3 circles are measured in radians rather than degrees where one radian is equal to (180/pi) degrees

group.append("path")
  .attr("d", arc)
