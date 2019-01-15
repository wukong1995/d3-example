import * as d3 from 'd3v4';
export default (svg, simulation, nodes, link = null) => {
  const color = d3.scaleOrdinal(d3.schemeCategory20);
  const node = svg.append('g')
    .attr('class', 'container')
    .selectAll('node')
    .data(nodes)
    .enter()
    .append('g');

  node.append('circle')
    .attr('r', function () {
      // if (d.id === main.id) return 50;
      return 30;
      // return parseInt(40 * Math.random(), 10);
    })
    .attr('fill', function (d) {
      return color(d.group);
    })
    .attr('pointer-events', 'all')
    .on('click', function (d) {
      if (d3.event.defaultPrevented) return;
      alert(d.id);
    })
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));
  node.append('text')
    .attr('dy', 2)
    .attr('text-anchor', 'middle')
    .text(function (d) {
      return d.id;
    })
    .attr('fill', 'white');

  simulation
    .nodes(nodes)
    .on('tick', ticked);

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

  function ticked() {
    if (link) {
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
    }
    node.attr('transform', function (d) {
      return 'translate(' + [d.x, d.y] + ')';
    });
  }
};
