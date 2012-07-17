/**
 * Determine if a string with HTML (a link) infact contains a link
 * Author: Tom Rothwell
 * Email: tom@pollenizer.com
 */

/**
 * var expression - Used to determine if a valid anchor tag and to extract the href & text.
 */
var expression = '[^<]*<a href="([^"]+)"[^<]*>([^</]+)<\/a>';

/**
 * Extracted link from anchor
 */
var linkHref = '';

/**
 * Extracted text from anchor
 */
var linkText = '';

/**
 * Determines if the link is a valid anchor
 * @param {Object} link
 * @return {Boolean}
 */
exports.checkLink = function(link) {
 	var regex = new RegExp(expression);
 	if (result = link.match(regex)) {
 		linkHref = result[1];
 		linkText = result[2]; 
 		return true;
 	}
 	return false;
}

/**
 * Attaches a click event that opens a browser when clicked.
 * @param {Object} link
 * @param {Object} attachTo - The already built Ti object
 * @param {String} linkColour - The colour of the text if its a link
 * @return {string}
 */
exports.attachLink = function(link, attachTo, linkColour) {
	if (result = this.checkLink(link)) {
		attachTo.addEventListener('click', function() {
			Ti.Platform.openURL(linkHref); //Open link in browser
		});
		attachTo.text = linkText; //Adjust the text on the label
		if (linkColour) {
			attachTo.color = linkColour;
		}
	}
	//Otherwise it's a normal string we should output as original
	return attachTo;
}
