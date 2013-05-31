(function (){
  d3.chart('ExampleChart', {
    initialize: function(options) {
      var chart = this;

      this.w = chart.base.attr("width");
      this.h = chart.base.attr("height");

      chart.margins = {
        top: 10,
        bottom: 35,
        left: 50,
        right: 0
      };

      chart.x = d3.scale.linear().range([0, chart.w - chart.margins.left]);
      chart.y = d3.scale.linear().range([this.h - chart.margins.bottom, 0]);

      chart.base
        .classed('ExampleChart',true);

     chart.layer('exampleLayer', chart,{
        dataBind: function(data) {
        },
        insert: function() {
        }
      });

      chart.layer('exampleLayer').on('enter', function() {});
      chart.layer('exampleLayer').on('exit', function() {});
      chart.layer('exampleLayer').on('update', function() {});


    },
    width: function(newWidth) {
      if (arguments.length === 0) {
        return this.w;
      }

      this.w = newWidth;

      return this;
    },
    height: function(newHeight) {
      if (arguments.length === 0) {
        return this.h;
      }

      this.h = newHeight;

      return this;
    }
  });
})();
