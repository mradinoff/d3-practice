var canvas = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .append("g")
    .attr("transform", "translate(50, 50)")

var tree = d3.tree() //no longer d3.layout.tree
  .size([400, 400]);

d3.json("mydata.json").then(function(data){


  var nodes = d3.hierarchy(data); // creates root note if in a heirarchical format such as json
  var links = tree(nodes).links(); // lays out root hierachy based on root and descendatants (argument = root)
  console.log(data);

  var node = canvas.selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
      .attr("class", "node")
      .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")";})

  node.append("circle")
    .attr("r", 5)
    .attr("fill", "blue");
 //not sure why this does not work


 node.append("text")
  .text(function(d) {return d.name;})
  //not sure why this does not work


var link = d3.linkHorizontal() //creates links between the nodes
  .x(function(d) {
    return d.y;
  })
  .y(function(d) {
    return d.x;
  });

canvas.selectAll(".link")
  .data(links)
  .enter()
    .append("path")
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#adadad")
    .attr("d", link)
})
