var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."

var array = [["cinci", "1 " + lorem], ["college", "2 " + lorem], ["pm", lorem], ["code", lorem], ["places", lorem], ["scrum", lorem]];

window.onload = init;

function init(){
	var highlights = document.querySelectorAll(".highlight")
	for(var i = 0; i < highlights.length; i++){
		highlights[i].addEventListener("click", slideInfo, false);
	}

	var bookTitles = document.querySelectorAll(".ind-books");

	for(var i = 0; i < bookTitles.length; i++){
		bookTitles[i].addEventListener("click", expand, false);

	}
}

function slideInfo(e){
	var highlight = e.target;
	var innerDiv = document.getElementById("inner-about-details");
	var divAboutSection = document.getElementById("about-section");
	var divDetailsSection = document.getElementById("details-section");

	var divAboutOpenClosed = divAboutSection.getAttribute("class");
	var divDetailOpenClosed = divDetailsSection.getAttribute("class");
	
	if(divAboutOpenClosed == "about-desc-unclicked" && divDetailOpenClosed == "about-details-unclicked"){
		divAboutSection.setAttribute("class", "about-desc-clicked");
		divDetailsSection.setAttribute("class", "about-details-clicked");
	}

	for(var i = 0; i < array.length; i++){
		if(array[i][0] == highlight.id){
			innerDiv.innerHTML = array[i][1];
		}
	};
	
}

function expand(e){
	var li = e.target;
	var liClass = li.getAttribute("class");
	if(liClass == "ind-books ind-books-closed"){
		li.setAttribute("class", "ind-books ind-books-open");
	}
	else{
		li.setAttribute("class", "ind-books ind-books-closed");
	}
}
















