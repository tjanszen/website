var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."

var pm = "Managed large-scale ecommerce sites for Sunglass Hut and mobile applications for Walmart, Shakira, P&G, and Budweiser<br><br>Experience at digital marketing agencies, software consulting, and technology startup<br><br>Proven project leader who loves creating customer centric software."
var code = "Advanved: HTML5, CSS3, JavaScript, JQuery<br><br>Learning: Bootstrap, Angular.js, Node.js, Express.js"
var places = "Accepted into Coding House January 2015. I taught myself programming through O'Reilly School of Technology and every website/blog you can think of.<br><br>As a side project, I am developing a website to help guide those who want to teach themselves how to code. There are a ton of resources available online but choosing a learning path is difficult."
var scrum = "Certified in December 2013. I have used agile methodologies for numerous projects including the first ever Scrum project at LISNR.<br><br>I am a true believer in agile software development. The iterative approach with cross-functional teams allows teams to adapt quickly and respond accurately to inevitable changes in today&#8217;s environment."
var college = "Graduated with a Bachelor of Science in Business with a focus in Marketing. Individuals and companies are all brands. Building this awareness is integral in today&#8217;s market. After working for a digital marketing agency, my love for the technical development of software was discovered.<br><br>In addition to my academics, I walked on Miami University&#8217;s Swim Team and earned athletic scholarship after first year performances. I swam four years as a NCAA Division I athlete."

var array = [["pm", pm], ["college", college], ["code", code], ["places", places], ["scrum", scrum], ["college", college]];
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
	else if (liClass == "ind-books ind-books-open"){
		li.setAttribute("class", "ind-books ind-books-closed");
	}
}
















