var canvas = d3.select("body").append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

var data = [10, 30, 60]
var r = 100;

var color = d3.scaleOrdinal()
          .range(["red", "blue", "orange"])

var group = canvas.append("g") //reminder: this is where we visualize the data
          .attr("transform", "translate(300, 300)");

var arc = d3.arc()
        .innerRadius(0) //changing this turns it into a donut
        .outerRadius(r);
//the rest is given by the pie layout
var pie = d3.pie() //d3 v3 = d3.layout.pie()
        .value(function( d ){return d;});

var arcs = group.selectAll(".arc")
        .data(pie(data))
        .enter()
          .append("g")
          .attr("class", "arc") //used for centering text below
//must append path to above
//at the moment we have 3 objects in pie(data), based off data we gave with different start and end angles (radian size)

arcs.append("path")
  .attr("d", arc)
  .attr("fill", function (d) {return color (d.data) })

arcs.append("text")
  .attr("transform", function(d) {return `translate( ${arc.centroid(d)} )`}) //puts labels in correct place
  .attr("text-anchor", "middle")
  .attr("font-size", "1.2em")
  .attr("font-family", "Arial")
  .text(function(d) {return d.data})
