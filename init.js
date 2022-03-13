window.addEventListener("load", () => {

});

function aload () {
  fetch("https://iamomprakash89.github.io/screencapture/html/app.html")
  .then(res=>res.text())
  .then((txt) => {
  	var elemDiv = document.createElement('div');
  	elemDiv.innerHTML = txt;
	document.body.appendChild(elemDiv);
    //document.getElementById("container").innerHTML = txt;
  })
}
aload();

var filesadded="";
if (typeof window.checkloadjscssfile === 'undefined') {
	function checkloadjscssfile(filename, filetype){
	    if (filesadded.indexOf("["+filename+"]")==-1){
	        loadjscssfile(filename, filetype)
	        filesadded+="["+filename+"]" //List of files added in the form "[filename1],[filename2],etc"
	    }
	    else
	        console.log(filename + " file already added!")
	}
}

if (typeof window.loadjscssfile === 'undefined') {
	function loadjscssfile(filename, filetype){
	    if (filetype=="js"){ //if filename is a external JavaScript file
	        var fileref=document.createElement('script')
	        fileref.setAttribute("type","text/javascript")
	        fileref.setAttribute("src", filename)
	    }
	    else if (filetype=="css"){ //if filename is an external CSS file
	        var fileref=document.createElement("link")
	        fileref.setAttribute("rel", "stylesheet")
	        fileref.setAttribute("type", "text/css")
	        fileref.setAttribute("href", filename)
	    }
	    if (typeof fileref!="undefined")
	        document.getElementsByTagName("head")[0].appendChild(fileref)
	}
}

//checkloadjscssfile("https://iamomprakash89.github.io/screencapture/css/typography.css", "css");
checkloadjscssfile("https://iamomprakash89.github.io/screencapture/css/gatsby-global.css", "css");
checkloadjscssfile("https://iamomprakash89.github.io/screencapture/css/glamor-styles.css", "css");
checkloadjscssfile("https://iamomprakash89.github.io/screencapture/css/app.css", "css");
checkloadjscssfile("https://iamomprakash89.github.io/screencapture/js/html2canvas.js", "js");
checkloadjscssfile("https://iamomprakash89.github.io/screencapture/js/app.js", "js");

