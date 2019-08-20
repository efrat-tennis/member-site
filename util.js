
function createCookie(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	else {
		expires = "";
	}
	const cookie = name + "=" + value + expires + "";
	alert("setting cookie=" + cookie);
	document.cookie = cookie;
	alert("document.cookie=" + document.cookie[0]);
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return document.cookie.substring(c_start, c_end);
		}
	}
	return "";
}

function getPreferredLanguage() {
	localStorage.getItem("pref-lang");
}

function setPreferredLanguage(lang) {
	alert("about to set pref lang: " + lang);
	localStorage.setItem("pref-lang", lang);
	alert("just set pref lang: " + getPreferredLanguage());
	alert("2nd try: just set pref lang: " + getPreferredLanguage());
}
