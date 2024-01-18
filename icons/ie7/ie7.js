/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'finkit\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_graph': '&#xe900;',
		'icon_activity': '&#xe901;',
		'icon_filter': '&#xe902;',
		'icon_setting': '&#xe903;',
		'icon_loyalty': '&#xe904;',
		'icon_conversion': '&#xe905;',
		'icon_involvement': '&#xe906;',
		'icon_economy': '&#xe907;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
