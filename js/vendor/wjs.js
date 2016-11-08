/**
 * @Title: 		wjs
 * @Descr: 	 	A javascript library for native DOM manipulation
 * @Package: 	Javascript
 * @Copyright: 	Released under the MIT license: http://opensource.org/licenses/MIT
 * @Author: 	Vincent Wen <www.77webtech.com/about> <wentianqi77@outlook.com>
 */

var wjs = {
	addClass: function(object, classname) {
		/**
		 * Add class
		 * @param: Target element - DOM element
		 * @param: Target class name, could be multiple - String
		 * @return: Void
		 */
		if (object !== undefined && object.className.indexOf(classname) < 0) {
			object.className += ' ' + classname;
		}
	},

	removeClass: function(object, classname) {
		/**
		 * Remove class
		 * @param: Target element - DOM element
		 * @param: Target class name, could be multiple - String
		 * @return: Void
		 */
		if (object !== undefined && object.className.indexOf(classname) >= 0) {
			object.className = object.className.replace(' ' + classname, '');
		}
	},

	toggleClass: function(object, classname) {
		/**
		 * Toggle class
		 * @param: Target element - DOM element
		 * @param: Target class name, could be multiple - String
		 * @return: Void
		 */
		if (object !== undefined && object.className.indexOf(classname) >= 0) {
			object.className = object.className.replace(' ' + classname, '');
		}	else {
			object.className += ' ' + classname;
		}
	},

	closest: function (element, identifier) {
		/**
		 * Return the up closest element based on the current given element
		 * @param: Current element - DOM element
		 * @param: The targeting up closest element identifier- String
		 * @return: Targeting DOM element, undefined if no match
		 */
		var result = document.querySelectorAll(identifier);
		for (var i=0; i<result.length; i++) {
			var object = element;
			while (object !== result[i] && object.parentNode !== null) {
				object = object.parentNode;
			}
			if (object !== document) {
				return object;
			}
		}
	},

	imgBg: function(object) {
		/**
		 * Get targeting img src and set as background
		 * @param: Targeting img - DOM element
		 * @return: Return
		 */
		 var element = document.querySelectorAll('.wBg');
		 for (var i=0; i<element.length; i++) {
		 	// Hide source image
		 	element[i].style.display = 'none';

		 	// Create DOM wrapper
		 	var wrapper = document.createElement('div');
		 	wrapper.className = 'wBgWrapper';
		 	var inner = document.createElement('div');
		 	inner.className = 'wBgInner';
		 	wrapper.appendChild(inner);

		 	// Set inner background style
		 	inner.style.backgroundImage = 'url(' + element[i].src + ')';
		 	inner.style.width = '100%';
		 	inner.style.height = '100%';

		 	// Add wrapper into DOM
		 	element[i].parentElement.insertBefore(wrapper, element[i]);
		 }
	}
}