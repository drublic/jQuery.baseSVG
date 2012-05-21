jQuery.baseSVG
==============

A jQuery-Plugin for SVG encoding into Base64.

Please be aware that this is __work in progress__. Please [file issues](https://github.com/drublic/jQuery.baseSVG/issues) if you find bugs or want another feature in it.

Produces a vertical gradient from color `from` to `to` as hex-code with the height of `height` in pixels. Colors can be empty which means the color-stop will be transparent.

Defaults are: `height: 400`, `from: #bada55`, `to: `.

The gradient is translated into a Base64 encoded string and applied as a background-image to a `element`.


## Usagage

	$(element).basesvg({
		from: '#bada55',
		to: '#fa51a7',
		height: 1000
	});


