Elements.multiHighlight
===========

![Screenshot](http://github.com/subhaze/mootools-elements-multihighlight/raw/master/logo.png)

Packager compatible.

This plugin is based off the [Element.highlight](http://mootools.net/docs/core/Fx/Fx.Tween#Element:highlight) function but with a slight twist.

Call this method on a collection of Elements to transition their color properties on mouseeneter/leave.

*Notice*: If the background color is transparent it will be set to white!

How to use
----------

###Syntax:

	#JS
	$$('.classOrSelector').multiHighlight( backgroundColor, foregroundColor, morphProps );

###Arguments:

1. backgroundColor - (*string*, MUST be either a HEX color value or NULL) The color you wish to transition the background to.
2. foregroundColor - (*string*, MUST be either a HEX color value or NULL) The color you with to transition the elements color property to.
3. morphProps - (*object*, optional, set of Fx options) See [Fx](http://mootools.net/docs/core/Fx/Fx) for valid options.

##Examples:

###JavaScript

	#JS
	// Transitions current colors to supplied colors on mouseenter and back to original on mouseleave
	$$('.link1').multiHighlight('#eee','#000');
	
	// Transitions ONLY the elements color property and applies Fx options to the transition
	$$('.link2').multiHighlight(null,'#eee', {duration:'short'});
	
	// Transitions ONLY the elements background-color and applies Fx options to the transition
	$$('.link3').multiHighlight('#eee',null, {duration:'long'});
	
###HTML

	#HTML
	<div class="link-container">
		<a class="link1" href="#">home</a>
		<a class="link1" href="#">about</a>
		<a class="link1" href="#">contact</a>
		<div class="clear-floats"></div>
	</div>
	<div class="link-container">
		<a class="link2" href="#">home</a>
		<a class="link2" href="#">about</a>
		<a class="link2" href="#">contact</a>
		<div class="clear-floats"></div>
	</div>
	<div class="link-container">
		<a class="link3" href="#">home</a>
		<a class="link3" href="#">about</a>
		<a class="link3" href="#">contact</a>
		<div class="clear-floats"></div>
	</div>