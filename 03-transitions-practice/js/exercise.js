var canvas = d3.select("body")
          .append("svg")
          .attr("width", 500)
          .attr("height", 500)

var circle = canvas.append("circle")
          .attr("cx", 50)
          .attr("cy", 50)
          .attr("r", 25)

circle.transition()
    .duration(1500) //default = 500
    .attr("cx", 150)
    .delay(1000)
    .transition()
      .attr("cy", 200)
        .transition()
          .attr("cx", 50)
           .on("end", function() {d3.select(this).attr("fill", "red")}) //callback when transition ends
