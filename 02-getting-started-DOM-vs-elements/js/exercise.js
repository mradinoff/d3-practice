// DOM and D3 relationship
var data = [10]

//try experimenting by commenting out that data or individual circles

var canvas = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)

var circle1 = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 100)
            .attr("r", 25)

var circle2 = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 200)
            .attr("r", 25)

var circles = canvas.selectAll("circle")
            .data(data)
            .attr("fill", "green")
            .exit() // as there is more circles than data
              .attr("fill", "blue")
