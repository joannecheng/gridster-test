$(function(){
  var grid;
  
  grid = $('.gridster ul').gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [140, 140]
  });

  $(window).resize( function() {
    var gridster = grid.data('gridster');
    var numCols = 7;
    var windowWidth = $(window).width();
    var baseDimension = (windowWidth - numCols*10)/numCols;
    
    gridster.resize_widget_dimensions({widget_base_dimensions: [baseDimension, baseDimension]});
  });

});
