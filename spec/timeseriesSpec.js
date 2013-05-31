describe('ExampleChart', function() {
  var viz,
    data;

  beforeEach(function() {
    viz = d3.select('body')
      .append('svg')
      .attr('width', '700')
      .attr('height','300')
      .chart('ExampleChart');*/

    data = [];

    viz.draw(data);
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  })

  it('should have a height and width', function() {
    viz = d3.select('body')
      .append('svg')
      .attr('width', '700')
      .attr('height','300')
      .chart('ExampleChart');

    viz.draw(data);
    expect(viz.width()).toEqual('700');
    expect(viz.height()).toEqual('300');
  });
});
