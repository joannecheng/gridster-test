$(function(){
  var grid;
  
  grid = $('.gridster ul').gridster({
    max_size_x: 4,
    widget_margins: [10, 10],
    widget_base_dimensions: [140, 140]
  });

  $(window).resize( function() {
    var gridster = grid.data('gridster');
    var windowWidth = $(window).width();
    var numCols = 8;
    var baseDimension = (windowWidth-(numCols+2)*10)/numCols;
    
    gridster.resize_widget_dimensions({widget_base_dimensions: [baseDimension, baseDimension]});
  });

});
