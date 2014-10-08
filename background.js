
/* ------------------ set default address -------------------------- */
var url = "http://www.amazon.com/WORLDS-BEST-BOSS-Coffee-Mug/dp/B003515AAG";

 
/* --------------- when user clicks extension load window ----------------- */ 
chrome.browserAction.onClicked.addListener(function(tab) { 
	window.open(url, "_blank", "toolbar=0,location=0,menubar=0");
});


/* ------------- when user enters alternative address save to local storage on click --------------- */
document.getElementById("save").onclick = function() {
	console.log("clicked");
	url = document.getElementById('customURL').value;
	console.log(url);
	//Save address to Chrome local storage
	chrome.storage.local.set({'url':url});
} 




/*------------------ test to see if local storage is set -------------------------- */
function getTest() {
	chrome.storage.local.get('url', function (result) {
	    url = result.url;
	    alert(result.url);
    })
} 
