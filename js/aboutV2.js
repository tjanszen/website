var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."

var learner = "Advantageous about learning something new every single day. Whether it is listing to an iTunes podcast, watching a YouTube clip, reading a book, or reading through blogs - I always search out ways to broaden my perspective.<br><br> One of my favorite quotes reads &ldquo;Life is not about finding yourself, life is about creating yourself&rdquo;. Creating is about searching out experiences to learn, grow, and challenge oneself."
var programming = "I am autodidact who has the passion and determination to pursue his dream as Full Stack Developer. <br><br>One of my side projects is developing a site to help guide those who are passionate about learning to code. There thousands of resources available online but choosing what to learn can be difficult. Having a plan on how to get somewhere is always a good idea. The site will help guide those interested in taking their coding skills to the next level."
var NCAA = "Growing up I always wanted to swim in college. I walked-on Miami University&#39;s Swim Team. I earned a spot on the team, received an athletic scholarship after my first year performances, and competed four years as a NCAA Division I Athlete.<br><br> Swimming taught me the importance failure. I failed hundreds of times during races, practice, and competition. Life is about picking yourself up and learning from your experiences."
var business = "My Business Degree is in Marketing. I am a true believer in companies and individuals establishing unique brands. Brands distinguish us from one another and allow establish unique identities. Developing a voice and message empower companies and individuals.<br><br> In addition to my studies and work experience, working at a startup was one of the best decisions in my career. Startups force you to think smart, be creative in tough situations, take ownership, and learn to overcome adversity. "
var experience = "I have been fortunate to work with great brands throughout my career.<br><br> My first PM projects were for P&G brands Pringles, Downy, Puffs, and Pantene. While consulting at eyewear giant Luxottica Retail, I was the PM for the Sunglass Hut Australia e-commerce website (desktop and mobile). Recently at LISNR (Cincinnati startup) I was the PM for the Budweiser Made In America mobile app (iOS and Android) and a mobile application for Walmart (iOS and Android)."

var array = [["learner", learner],
			 ["programming", programming],
			 ["NCAA", NCAA],
			  ["business", business],
			  ["experience", experience]
			   ];
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
	var aboutCenter = document.getElementById("about-center");
	var aboutRightText = document.getElementById("about-right-text")
	var aboutCenterClass = aboutCenter.getAttribute("class");
	var aboutSectionWrapper = document.getElementById("about-section-wrapper")

		aboutSectionWrapper.style.height="425px";
		aboutSectionWrapper.style.width="90%";
		aboutCenter.setAttribute("class", "half")

	for(var i = 0; i < array.length; i++){
		if(array[i][0] == highlight.id){
			aboutRightText.innerHTML = array[i][1];
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
















