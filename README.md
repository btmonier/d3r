# d3r

Basic tests to see how to integrate the D3.js JavaScript graphics library with R via
`htmlwidgets`. I am using [v7-min](https://d3js.org/getting-started#d3-in-vanilla-html).

Example usage:

```r
# Display circles at random radii

set.seed(123)
sample(10:15, 20, replace = TRUE) |> myD3Visualizer(500, 500)
```


