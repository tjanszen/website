var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Hic, fugit, corporis. Consequuntur officiis illum dignissimos.<br><br> Commodi architecto iste, ipsam sequi amet perferendis dolorum nesciunt, corporis explicabo, aspernatur porro molestiae doloremque."

var learner = "Advantageous about learning something new every single day. If I can learn at a minumum one new thing a day, I consider that day a success. Whether it is listening to an iTunes podcast, watching a YouTube clip, reading a book, or skimming through a blog - I always search out ways to broaden my perspective.<br><br>One of my favorite quotes reads &ldquo;Life is not about finding yourself, life is about creating yourself&rdquo;. Creating is about searching out experiences to learn, grow, and challenge oneself."
var projects = "The most challenging and rewarding project I been fortunate to work on involved using high-frequency sound waves (above the level humans can hear) to trigger experiences on users phones in Walmart stores. At LISNR (Cincinnati based startup), we engineered the first ever high-frequency speaker to mount under a store shelf. This speaker emitted encoded sound waves that were decoded by an application on a user&rsquo;s phone.The application would then send customers product recommendations and coupons based on user activity.<br><br>My role was the project manager who oversaw the hardware speaker implementation and the iOS / Android application development. The project included 15+ vendor partners to manage workflow. Successfully launch across the United States in October 2014."
var programming = "I love software development and the continuous education demanded to stay relevant. I am autodidact who has the passion and determination to pursue his dream as full stack software engineer. I got my feet wet learning through CodeCademy and eventually enrolling at O’Reilly School of Technology. I have purchased countless books and used almost every online tutorial. My passion grew from there and I have officially made the transition into a full stack developer.<br><br>One of my side projects is developing a site to help guide those who are passionate about learning to code. There thousands of resources available online but choosing what to learn can be difficult. Having a plan on how to get somewhere is always a good idea. The site will help guide those interested in taking their coding skills to the next level."
var NCAA = "I was told by the head coach at Miami University I was not fast enough to walk-on the swim team. I took this as a challenge and showed up for tryouts with nothing but motivation. I made the team, earned an athletic scholarship, and competed four years as a NCAA Division I Athlete.<br><br>But what I learned the most was improving from failure. I failed hundreds of times during races, practice, and competition. Life is about picking yourself up and learning from your experiences. Swimming taught me this more than anything else in life. Coding is about solving problems and continuously improving."
var business = "I graduated from the Farmer School of Business with a focus in Marketing. I am a true believer in companies and individuals establishing unique brands. Brands distinguish us from one another and allow establish unique identities. Developing a voice and message empower companies and individuals."
var experience = "I have been fortunate to work with great brands throughout my career.<br><br> My first PM projects were at Possible for P&G brands Pringles, Downey, Puffs, and Pantene. While consulting at Luxottica Retail, I was the PM for the Sunglass Hut Australia e-commerce website (desktop and mobile). Recently at LISNR (Cincinnati startup) I was the PM for the Budweiser Made In America mobile app (iOS and Android) and a mobile application for Walmart."
var array = [["learner", learner],
			 ["projects", projects],
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
















