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
    console
    var baseDimension = (windowWidth - numCols*10)/numCols;
    
    gridster.options.widget_base_dimensions = [baseDimension, baseDimension];
    gridster.generate_grid_and_stylesheet();
    gridster.get_widgets_from_DOM();
    gridster.set_dom_grid_height();
  });

});
