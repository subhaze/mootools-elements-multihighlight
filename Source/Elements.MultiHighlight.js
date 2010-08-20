/*
---

name: Elements.multiHighlight

description: 

license: MIT-style

requires: 
  - Core/Elements
  - Core/Fx.Morph

provides: Elements.multiHighlight

authors: [Michael Russell]

...
*/

Elements.implement({

	multiHighlight: function( backgroundColor, foregroundColor, morphProps ) {
    var morphValues = {};
        morphValues.mouseoverVals = {},
        morphValues.mouseoutVals  = {};
	  
	  if( backgroundColor || foregroundColor ) {
	    this.each( function( elem ) {
	      
        if( backgroundColor ) {
          morphValues.mouseoutVals['background-color'] = ( elem.getStyle('background-color') != 'transparent' ) 
          ? elem.getStyle('background-color') : '#fff';
          morphValues.mouseoverVals['background-color'] = backgroundColor;
        }
        
        if( foregroundColor ) {
          morphValues.mouseoutVals['color'] = elem.getStyle('color');
          morphValues.mouseoverVals['color'] = foregroundColor;
        }
        
        if( morphProps ) {
          elem.set( 'morph', morphProps );
        }
        
        elem.addEvents({
          'mouseenter':  function( e ) {
            e.stop();
            e.target.morph( morphValues.mouseoverVals );
          },
          'mouseleave':   function( e ) {
            e.stop();
            e.target.morph( morphValues.mouseoutVals );
          }
        });
        
	    });
	  }
	}
});