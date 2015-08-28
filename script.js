(function(){
	var headerNavBar = document.getElementById("headerNavBar");
	var closeMeButton = document.getElementById("closeMeButton");
	var aside = document.getElementById("aside");
	var categoryButton1 = document.getElementById("categoryButton1");
	var categoryButton2 = document.getElementById("categoryButton2");
	var nav = document.getElementById("nav");

	headerNavBar.addEventListener("click", showAside, false);
	closeMeButton.addEventListener("click", hideAside, false);
	categoryButton1.addEventListener("click", toggleCategory, false);
	categoryButton2.addEventListener("click", toggleCategory, false);
	this.addEventListener("scroll", stickyNav, false);

	function showAside(event){
		event.stopPropagation();
		aside.style.visibility = "visible";
	}

	function hideAside(event){
		event.stopPropagation();
		aside.style.visibility = "hidden";
	}

	function toggleCategory(event){
		event.stopPropagation();
		if(event.target.id === "categoryButton1" || event.target.id === "categoryButton2"){
			var query = "#" + event.target.id + " + ul";
			var dropdown = document.querySelector(query);
			var isFolded = (dropdown.getAttribute("data-fold") === "true");
			if(isFolded){
				dropdown.style.display = "flex";
			}
			else {
				dropdown.style.display = "none";
			}
			isFolded = !isFolded;
			dropdown.setAttribute("data-fold", isFolded);
		}
	}

	var navTop = nav.offsetTop;
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
})(window === "undefined" ? this : window);
