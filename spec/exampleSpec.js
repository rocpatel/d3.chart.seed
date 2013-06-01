describe('ExampleChart', function() {
  var chart,
    data;

  beforeEach(function() {
  });

  afterEach(function() {
    d3.selectAll('svg').remove();
  });

  it('should do something awesome', function() {

    chart = d3.select('body')
      .append('svg')
      .attr('width', 400)
      .attr('height',30)
      .chart('ExampleChart');

    // create an instance of the chart on a d3 selection
    // render it with some data
    data = [1,4,6,9,12,13,30];
    chart.draw(data);

    expect('your next move').toBe('to test something');
  });
});
