$(document).ready(function(){

	//draggable
	$( "#draggable" ).draggable();

	//drag & drop
	$( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
      }
    });

    //animate
    $( "#resizable" ).resizable({
      animate: true
    });

    //selectable
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
        	var index = $( "#selectable li" ).index( this );
        	result.append( " #" + ( index + 1 ) );
        });
      }
    });

    //sortable
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

    //accordian
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });

    
})