import * as d3 from 'd3v4';

export default () => {
  const svg = d3.select('svg');

  // svg drag and zoom
  // svg.call(d3.behavior.drag()
  //   .on('drag', dragmove));
  // svg.call(d3.behavior.zoom()
  //   .x(xScale)
  //   .y(yScale)
  //   .scaleExtent([1, 6])
  //   .on('zoom', doZoom));

  // svg drag and zoom
  return svg;
};
