
// Dollar-save
! function($) {

	// Init plugin
	$.fn.basesvg = function (options) {

		var defaults = {
			height: 400,
			from: '#bada55',
			to: ''
		};

		var settings = $.extend(defaults, options);

		/**
		 *
		 *  Base64 encode
		 *  http://www.webtoolkit.info/
		 *
		 **/
		var Base64 = {
		 
			// private property
			_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		 
			// public method for encoding
			encode : function (input) {
				var output = "";
				var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
				var i = 0;
		 
				input = Base64._utf8_encode(input);
		 
				while (i < input.length) {
		 
					chr1 = input.charCodeAt(i++);
					chr2 = input.charCodeAt(i++);
					chr3 = input.charCodeAt(i++);
		 
					enc1 = chr1 >> 2;
					enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
					enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
					enc4 = chr3 & 63;
		 
					if (isNaN(chr2)) {
						enc3 = enc4 = 64;
					} else if (isNaN(chr3)) {
						enc4 = 64;
					}
		 
					output = output +
					this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
					this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
		 
				}
		 
				return output;
			},
		 
			// private method for UTF-8 encoding
			_utf8_encode : function (string) {
				string = string.replace(/\r\n/g,"\n");
				var utftext = "";
		 
				for (var n = 0; n < string.length; n++) {
		 
					var c = string.charCodeAt(n);
		 
					if (c < 128) {
						utftext += String.fromCharCode(c);
					}
					else if((c > 127) && (c < 2048)) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128);
					}
					else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128);
					}
		 
				}
		 
				return utftext;
			}
		 
		};

		// Create Base64 encoded SVG-string
		var createBase64 = function () {

			var startingpoint = 'data:image/svg+xml;base64,';

			var svgstring =	'<?xml version="1.0" encoding="utf-8"?>' +
				'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
				'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
				'width="1px" height="' + settings.height + 'px" ' +
				'viewBox="0 0 1 ' + settings.height + 'px" ' +
				'enable-background="new 0 0 1 ' + settings.height + '" xml:space="preserve">' +
					'<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="' + settings.height + '">' +
						'<stop offset="0" style="stop-color:' + 		(settings.from || '#000000') 								+ '" ' + ((settings.from) ? '' : 'stop-opacity="0"') + ' />' +
						'<stop offset="0.05" style="stop-color:' +	(settings.from || '#000000') 								+ '" ' + ((settings.from) ? '' : 'stop-opacity="0"') + ' />' +
						'<stop offset="0.95" style="stop-color:' +	(settings.to || settings.from || '#000000') 	+ '" ' + ((settings.to) ? '' : 'stop-opacity="0"') + ' />' +
						'<stop offset="1" style="stop-color:' + 		(settings.to || settings.from || '#000000') 	+ '" ' + ((settings.to) ? '' : 'stop-opacity="0"') + ' />' +
					'</linearGradient>' +
					'<rect fill="url(#gradient)" width="1" height="' + settings.height + '" />' +
				'</svg>';

			return startingpoint + Base64.encode(svgstring);
		};

		var init = ! function (els) {
			return els.each(function() {
				$(this).css({ 'background-image': 'url(' + createBase64() + ')' });
			});
		} (this);

	};

} (jQuery);

