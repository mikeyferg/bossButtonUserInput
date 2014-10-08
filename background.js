
/* ------------------ set default address -------------------------- */


localStorage.setItem ('url', "http://www.amazon.com/WORLDS-BEST-BOSS-Coffee-Mug/dp/B003515AAG");

 /*function getTest() {
	chrome.storage.local.get('url', function (result) {
	    url = result.url;
	    alert(result.url);
    })
} *.
/* --------------- when user clicks extension load window ----------------- */ 
chrome.browserAction.onClicked.addListener(function(tab) { 
	window.open(localStorage.url, "_blank", "toolbar=0,location=0,menubar=0");
});


/* ------------- when user enters alternative address save to local storage on click --------------- */
document.getElementById("save").onclick = function(event) {
	console.log("clicked");
	//var newUrl = document.getElementById('customURL').value;
	//console.log(url);
	//Save address to Chrome local storage
	//chrome.storage.local.set({'url':newUrl});
	event.preventDefault();
	localStorage.url = document.getElementById('customURL').value;

} 




/*------------------ test to see if local storage is set -------------------------- */

