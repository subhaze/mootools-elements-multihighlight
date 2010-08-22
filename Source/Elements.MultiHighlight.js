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
    if( !backgroundColor && ! foregroundColor ) return this;
    if( morphProps )  this.set( 'morph', morphProps );
    this.each( function( elem ) {
      (function(){
        var mouseoutVals = {
          'background-color': ( elem.getStyle('background-color') != 'transparent')?elem.getStyle('background-color'):'#fff',
          'color':            elem.getStyle('color')
        };
        elem.addEvents({
          'mouseenter':  function( e ) {
            e.target.morph( {'background-color': backgroundColor,'color':foregroundColor} );
          },
          'mouseleave':   function( e ) {
            e.target.morph( mouseoutVals );
          }
        });
      })(); 
    });
    return this;
  }
});