HTMLWidgets.widget({
    name: 'myD3Visualizer',
    type: 'output',

    factory: function(el, width, height) {
    // Create an SVG element and append it to the container element.
    var svg = d3.select(el)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    return {
        renderValue: function(x) {
            console.log("Rendering")
            // Clear previous elements
            svg.selectAll("*").remove();

            // Assume x.data is a numeric vector representing circle radii.
            var data = x.data;

            // For simplicity, space circles evenly along the width.
            var spacing = width / (data.length + 1);

            // Append a circle for each datum
            svg.selectAll("circle")
               .data(data)
               .enter()
               .append("circle")
               .attr("cx", function(d, i) { return (i + 1) * spacing; })
               .attr("cy", height / 2)
               .attr("r", function(d) { return d; })
               .style("fill", "steelblue");
            },
            resize: function(newWidth, newHeight) {
            // Update the dimensions of the SVG element on resize.
            svg.attr("width", newWidth).attr("height", newHeight);
        }
    };
    }
});


