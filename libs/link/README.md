Link Plugin - For iOS
===============================

When it comes to creating labels with html rendered links, it becomes annoying and difficult within iOS due to the lack of native support.

This plugin works like so:

** Usage **
-- Place "link.js" within your libs directory.
-- You have the following string : "Hello Bob <a href="http://google.com">Hello World</a>"
-- Make a call to lib the after you've created your label by doing the following:

	var Link = require('libs/link');
	this.codeValue = Link.attachLink(
		this.codeValue.text, //Your html that you want extracted
		this.codeValue, //Ti.UI.createLabel object
		'#7A8B8B' //Link colour
	);

-- The text "Hello World" is used as your text.
-- The URL "http://googe.com" is used with the click handler added to the label.
