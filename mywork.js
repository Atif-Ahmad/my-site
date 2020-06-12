
// document.getElementById("github").style.visibility = "visible";
// document.getElementById("java").style.visibility = "hidden";
// document.getElementById("web-pages").style.visibility = "hidden";

var javaDiv = document.getElementById("java");
var githubDiv = document.getElementById("github");
var websiteDiv = document.getElementById("web-pages");


function showTopic(topics){
	if (topics == "java"){
		document.getElementById("main").innerHTML = javaDiv.innerHTML;
		
	}else if (topics == "github"){

		document.getElementById("main").innerHTML = githubDiv.innerHTML;
		
	}else if (topics == "website"){
		
		document.getElementById("main").innerHTML = websiteDiv.innerHTML;
		
	}
}

