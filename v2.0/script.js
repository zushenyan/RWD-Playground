// (function(){
	var headerNavBar = document.getElementById("headerNavBar");
	var navDropdown = document.getElementById("dropdown");
	var navDropdownUl = document.querySelector("#dropdown ul");
	var aside = document.getElementById("aside");
	var closeMeButton = document.getElementById("closeMeButton");
	var categoryButton1 = document.getElementById("categoryButton1");
	var categoryButton2 = document.getElementById("categoryButton2");
	var nav = document.getElementById("nav");

	var navTop = nav.offsetTop;

	var types = ["click", "touchend"];

	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		eventRegister(aside, types[1], function(event){ event.stopPropagation(); });
		eventRegister(headerNavBar, types[1], showAside);
		eventRegister(closeMeButton, types[1], hideAside);
		eventRegister(categoryButton1, types[1], toggleCategory);
		eventRegister(categoryButton2, types[1], toggleCategory);
		eventRegister(navDropdown, types[1], toggleDropdown);
		eventRegister(this, types[1], hideAll);
	}
	else {
		eventRegister(aside, types[0], function(event){ event.stopPropagation(); });
		eventRegister(headerNavBar, types[0], showAside);
		eventRegister(closeMeButton, types[0], hideAside);
		eventRegister(categoryButton1, types[0], toggleCategory);
		eventRegister(categoryButton2, types[0], toggleCategory);
		eventRegister(navDropdown, types[0], toggleDropdown);
		eventRegister(this, types[0], hideAll);
	}

	this.addEventListener("scroll", stickyNav, false);
	this.addEventListener("orientationchange", function(event){
		navTop = nav.offsetTop;
	}, false);

	function hideAll(event){
		hideNavDropdownUl();
		hideAside(event);
	}

	function showAside(event){
		event.stopPropagation();
		aside.className = "show";
	}
	function hideAside(event){
		event.stopPropagation();
		aside.className = "hide";
	}
	function showNavDropdownUl(){ navDropdownUl.className = "show"; }
	function hideNavDropdownUl(){ navDropdownUl.className = "hide"; }
	function toggleDropdown(event) {
		event.stopPropagation();
		if(navDropdownUl.className === "show"){
			hideNavDropdownUl();
		}
		else {
			showNavDropdownUl();
		}
	}

	function toggleCategory(event){
		event.stopPropagation();
		if(event.target.id === "categoryButton1" || event.target.id === "categoryButton2"){
			var query = "#" + event.target.id + " + ul";
			var dropdown = document.querySelector(query);
			if(dropdown.className === "hide"){
				dropdown.className = "show";
			}
			else {
				dropdown.className = "hide";
			}
		}
	}

	function stickyNav(event){
		var currentViewTop = this.scrollY;

		if(currentViewTop > navTop){
			nav.style.position = "fixed";
			nav.style.top = "0";
		}
		else{
			nav.style.position = "static";
		}
	}

	function eventRegister(ele, types, func){
		if(types instanceof Array){
			for(var i in types){
				ele.addEventListener(types[i], func);
			}
		}
		else {
			ele.addEventListener(types, func);
		}
	}
// })(window === "undefined" ? this : window);
