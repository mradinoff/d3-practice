//Data types and D3
// A labelled bar chart
d3.csv("mydata.csv").then(function (data) { // d3.json("mydata.json") accesses other data file
  console.log(data);
  var canvas = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);

    canvas.selectAll("rect")
      .data(data) // data join
      .enter() // add missing rectangles
        .append("rect")
        .attr("width", function(d) {return d.age * 10;})
        .attr("height", 48)
        .attr("y", function(d, i) {return i * 50})
        .attr("fill", "blue");

        canvas.selectAll("text")
        .data(data)
        .enter()
          .append("text")
          .attr("fill", "white")
          .attr("y", function(d, i) {return i * 50 + 24})
          .text(function (d) {return d.name});

})
