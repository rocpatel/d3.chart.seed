(function (){
  // Example from http://misoproject.com/d3-chart/

  // define a new chart type: a circle chart
  d3.chart("ExampleChart", {

    initialize: function() {
      // create a layer of circles that will go into
      // a new group element on the base of the chart
      this.layer("circles", this.base.append("g"), {

        // select the elements we wish to bind to and
        // bind the data to them.
        dataBind: function(data) {
          return this.selectAll("circle")
            .data(data);
        },

        // insert actual circles
        insert: function() {
          return this.append("circle");
        },

        // define lifecycle events
        events: {

          // paint new elements, but set their radius to 0
          // and make them red
          "enter": function() {
            return this.attr("cx", function(d) {
              return d * 10;
            })
              .attr("cy", 10)
              .attr("r", 0)
              .style("fill", "red");
          },
          // then transition them to a radius of 5 and change
          // their fill to blue
          "enter:transition": function() {
            return this
              .delay(500)
              .attr("r", 5)
              .style("fill", "blue");
          }
        }
      });
    }
  });

})();
