#' Create a d3 Visualizer Widget
#'
#' This widget uses d3.js to render a series of circles where each circle's radius is given
#' by the numeric data provided.
#'
#' @param data A numeric vector for the circle radii.
#' @param width The width of the widget (optional).
#' @param height The height of the widget (optional).
#' @param elementId An element id for the widget's container (optional).
#'
#' @return An htmlwidget object.
#' @export
myD3Visualizer <- function(data, width = NULL, height = NULL, elementId = NULL) {

  # Register the d3 dependency
  d3Dep <- htmltools::htmlDependency(
    name = "d3",
    version = "7.9.0",  # Adjust to your d3 version
    src = c(file = system.file("htmlwidgets/lib/d3", package = "d3r")),
    script = "d3.v7.min.js"
  )

  # Create the widget
  htmlwidgets::createWidget(
    name = "myD3Visualizer",
    x = list(data = data),
    width = width,
    height = height,
    package = "d3r",
    elementId = elementId,
    dependencies = list(d3Dep)
  )
}

