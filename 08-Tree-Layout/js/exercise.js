var canvas = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .append("g")
    .attr("transform", "translate(50, 50)")

  //BELOW = PRACTICING DRAWING A LINE
// var diagonal = d3.svg.diagonal()
//   .source({x: 10, y: 10}) //source = from, target = to
//   .target({x: 300, y: 300})

  // Ended up having to use d3 v3 instead of v5
  //v5 uses lineHorizontal / lineVertical with data inputs


// canvas.append("path")
//   .attr("fill","none")
//   .attr("stroke","black")
//   .attr("d", diagonal);

var tree = d3.layout.tree()
  .size([400, 400]);

d3.json("mydata.json", function(data){

  var nodes = tree.nodes(data);
  console.log(nodes)

})
