// Creating a simple bar chart

var dataArray = [20, 40, 50, 60];
var width = 500;
var height = 500;

var widthScale = d3.scaleLinear() //result of a linear function
                .domain([0, 100])//range the scale is measuring from(min, max)
                .range([0, width]);//width of the graph within the canvas


//
var color = d3.scaleLinear()
          .domain([0, 60])
          .range(["red", "blue"]) // close to 0 = redder, close to 60 = bluer

var axis = d3.axisBottom()
          .scale(widthScale)
          .ticks(5); //how many markings there are on the x axis

var canvas = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('g') //g stands for group
            .attr("transform", "translate(50, 50)") // sets position of canvas (x, y)

var bars = canvas.selectAll("rect")
          .data(dataArray)
          .enter() //returns placeholder elements (i.e. the rectangles that don't exist) for each data element
            .append("rect")
            .attr("width", function(n) {return widthScale(n); })
            .attr("height", 50)
            .attr("fill", function(n) {return color(n)}) //fill property is used for colour
            .attr("y", function(n, i) {return i * 100})

canvas.append("g")
      .attr("transform", "translate (0, 400)")
      .call(axis); //required to generate axis
