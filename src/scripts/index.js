import * as d3 from 'd3v4';
import graph from './graph';

export default () => {
  const svg = d3.select('svg');
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  const color = d3.scaleOrdinal(d3.schemeCategory20);

  // svg drag and zoom
  // svg.call(d3.behavior.drag()
  //   .on('drag', dragmove));
  // svg.call(d3.behavior.zoom()
  //   .x(xScale)
  //   .y(yScale)
  //   .scaleExtent([1, 6])
  //   .on('zoom', doZoom));

  // svg drag and zoom

  // draw
  const simulation = d3.forceSimulation()
    .force('link', d3.forceLink().id(function (d) {
      return d.id;
    }))
    .force('charge', d3.forceManyBody())
    .force('collide', d3.forceCollide(60))
    .force('center', d3.forceCenter(width / 2, height / 2));

  const link = svg.append('g')
    .attr('class', 'link')
    .selectAll('line')
    .data(graph.links)
    .enter().append('line')
    .attr('stroke-width', function (d) {
      return Math.sqrt(d.value);
    })
    .attr('stroke', function (d) {
      return color(d.value);
    });

  const node = svg.append('g')
    .attr('class', 'node')
    .selectAll('circle')
    .data(graph.nodes)
    .enter()
    .append('circle')
    .attr('r', 40)
    .attr('fill', function (d) {
      return color(d.group);
    })
    .attr('pointer-events', 'all')
    .on('click', function(d) { alert(d); } )
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  const text = svg.append('g')
    .attr('class', 'labels')
    .selectAll('text')
    .data(graph.nodes)
    .enter().append('text')
    .attr('dy', 2)
    .attr('text-anchor', 'middle')
    .text(function (d) {
      return d.id;
    })
    .attr('fill', 'white');


  simulation
    .nodes(graph.nodes)
    .on('tick', ticked);

  simulation.force('link')
    .links(graph.links);

  function ticked() {
    link
      .attr('x1', function (d) {
        return d.source.x;
      })
      .attr('y1', function (d) {
        return d.source.y;
      })
      .attr('x2', function (d) {
        return d.target.x;
      })
      .attr('y2', function (d) {
        return d.target.y;
      });

    node
      .attr('cx', function (d) {
        return d.x;
      })
      .attr('cy', function (d) {
        return d.y;
      });
    text
      .attr('x', function (d) {
        return d.x;
      })
      .attr('y', function (d) {
        return d.y;
      });

  }

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
};
