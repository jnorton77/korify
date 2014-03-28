var korify_count = 0;
var korify_add = function() {
	korify_count += 1;
	var cornify_url = 'http://www.cornify.com/';
	var div = document.createElement('div');
	div.style.position = 'fixed';
	
	var numType = 'px';
	var heightRandom = Math.random()*.75;
	var windowHeight = 768;
	var windowWidth = 1024;
	var height = 0;
	var width = 0;
	var de = document.documentElement;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
	} else if(de && de.clientHeight) {
		windowHeight = de.clientHeight;
		windowWidth = de.clientWidth;
	} else {
		numType = '%';
		height = Math.round( height*100 )+'%';
	}
	
	div.onclick = korify_add;
	div.style.zIndex = 10;
	div.style.outline = 0;
	
	if( korify_count==15 ) {
		div.style.top = Math.max( 0, Math.round( (windowHeight-530)/2 ) )  + 'px';
		div.style.left = Math.round( (windowWidth-530)/2 ) + 'px';
		div.style.zIndex = 1000;
	} else {
		if( numType=='px' ) div.style.top = Math.round( windowHeight*heightRandom ) + numType;
		else div.style.top = height;
		div.style.left = Math.round( Math.random()*90 ) + '%';
	}
	
	var img = document.createElement('img');
	var currentTime = new Date();
	var submitTime = currentTime.getTime();
	if( korify_count==15 ) submitTime = 0;

	var imlocation = "img/";
  var currentdate = 0;
  var image_number = 0;
  function ImageArray (n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }
 image = new ImageArray(3)
 image[0] = 'kori_1.png'
 image[1] = 'kori_2.png'
 image[2] = 'kori_3.png'
 var rand = 60/image.length

 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 function randomimage() {
 	currentdate = new Date()


 	image_number = getRandomInt(0,2)
 	// image_number = Math.floor(image_number/rand)
 	return(image[image_number])
 }
 // "<img src='" + imlocation + randomimage()+ "'>");




  img.setAttribute('src', imlocation + randomimage());
	var ease = "all .1s linear";
	//div.style['-webkit-transition'] = ease;
	//div.style.webkitTransition = ease;
	div.style.WebkitTransition = ease;
	div.style.WebkitTransform = "rotate(1deg) scale(1.01,1.01)";
	//div.style.MozTransition = "all .1s linear";
	div.style.transition = "all .1s linear";
	div.onmouseover = function() {
		var size = 1+Math.round(Math.random()*10)/100;
		var angle = Math.round(Math.random()*20-10);
		var result = "rotate("+angle+"deg) scale("+size+","+size+")";
		this.style.transform = result;
		//this.style['-webkit-transform'] = result;
		//this.style.webkitTransform = result;
		this.style.WebkitTransform = result;
		//this.style.MozTransform = result;
		//alert(this + ' | ' + result);
	};
	div.onmouseout = function() {
		var size = .9+Math.round(Math.random()*10)/100;
		var angle = Math.round(Math.random()*6-3);
		var result = "rotate("+angle+"deg) scale("+size+","+size+")";
		this.style.transform = result;	
		//this.style['-webkit-transform'] = result;
		//this.style.webkitTransform = result;
		this.style.WebkitTransform = result;
		//this.style.MozTransform = result;
	};
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
	div.appendChild(img);	
	
	// Add stylesheet.
	if (korify_count == 5) {
		var cssExisting = document.getElementById('__cornify_css');
		if (!cssExisting) {
			var head = document.getElementsByTagName("head")[0];
			var css = document.createElement('link');
			css.id = '__cornify_css';
			css.type = 'text/css';
			css.rel = 'stylesheet';
			css.href = 'http://www.cornify.com/css/cornify.css';
			css.media = 'screen';
			head.appendChild(css);
		}
		korify_replace();
	}	
	
	korify_updatecount();
};

var korify_updatecount = function() {
	var p = document.getElementById('korifycount');
	if(p == null) {
		var p = document.createElement('p');
		p.id = 'korifycount';
		p.style.position = 'fixed';
		p.style.top = '0px';
		p.style.left = '0px';
		p.style.right = '0px';
		p.style.zIndex = '1000000000';
		p.style.color = '#ff00ff';
		p.style.textAlign = 'center';
		p.style.fontSize = '24px';
		p.style.fontFamily = "'Comic Sans MS', 'Comic Sans', 'Marker Felt', serif";
		var body = document.getElementsByTagName('div')[0];
		body.appendChild(p);
	}
	if(korify_count == 1) {
		p.innerHTML = korify_count+' Koriroys CREATED';
	} else {
		p.innerHTML = korify_count+' Koriroys CREATED';
	}
	korify_setcookie('korify', korify_count+'', 1000);
};

var korify_setcookie = function(name, value, days) {
	var d = new Date();
	d.setTime(d.getTime()+(days*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = name + "=" + value + "; " + expires;
};

var korify_getcookie = function(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if(c.indexOf(name)==0) {
			return c.substring(name.length,c.length);
		}
	}
	return "";
};

korify_count = parseInt(korify_getcookie('korify'));
if(isNaN(korify_count)) {
	korify_count = 0;
}

var korify_replace = function() {
	// Replace text.
	var hc = 6;
	var hs;
	var h;
	var k;
	var words = ['Happy','Sparkly','Glittery','Fun','Magical','Lovely','Cute','Charming','Amazing','Wonderful'];
	while(hc >= 1) {
		hs = document.getElementsByTagName('h' + hc);
		for (k = 0; k < hs.length; k++) {
			h = hs[k];
			h.innerHTML = words[Math.floor(Math.random()*words.length)] + ' ' + h.innerHTML;
		}
		hc-=1;
	}
};

/*
 * Adapted from http://www.snaptortoise.com/konami-js/
 */
var cornami = {
	input:"",
	pattern:"38384040373937396665",
	clear:setTimeout('cornami.clear_input()',5000),
	load: function() {
		window.document.onkeydown = function(e) {
			if (cornami.input == cornami.pattern) {
				korify_add();
				clearTimeout(cornami.clear);
				return;
			}
			else {
				cornami.input += e ? e.keyCode : event.keyCode;
				if (cornami.input == cornami.pattern) korify_add();
				clearTimeout(cornami.clear);
				cornami.clear = setTimeout("cornami.clear_input()", 5000);
			}
		};
	},
	clear_input: function() {
		cornami.input="";
		clearTimeout(cornami.clear);
	}
};
cornami.load();
