function openSlider()
{
    var widget_main_container_div = document.getElementsByClassName('widget-main-container');
    widget_main_container_div = widget_main_container_div[0];

    var widget_button_container_div = document.getElementsByClassName('widget-button-container');
    widget_button_container_div = widget_button_container_div[0];

    var widget_slider_container_div = document.getElementsByClassName('widget-slider-container');
    widget_slider_container_div = widget_slider_container_div[0];

    if(widget_main_container_div.classList.contains('css-1owq2hv'))
    {
        widget_main_container_div.classList.remove('css-1owq2hv');
        widget_main_container_div.classList.add('css-101ncaf');

        widget_button_container_div.classList.remove('css-1oz4tqn');
        widget_button_container_div.classList.add('css-ghzv10');

        widget_slider_container_div.classList.remove('css-5sa19j');
        widget_slider_container_div.classList.add('css-1f0dz3x');
    }
    else if(widget_main_container_div.classList.contains('css-101ncaf'))
    {
        widget_main_container_div.classList.remove('css-101ncaf');
        widget_main_container_div.classList.add('css-1owq2hv');

        widget_button_container_div.classList.remove('css-ghzv10');
        widget_button_container_div.classList.add('css-1oz4tqn');

        widget_slider_container_div.classList.remove('css-1f0dz3x');
        widget_slider_container_div.classList.add('css-5sa19j');
    }
}

function screenCapture()
{
    html2canvas(document.querySelector("body"), {
        allowTaint: true,
        useCORS: true,
        imageTimeout: 15000,
        foreignObjectRendering: true
    }).then(canvas => {
        /*var a = document.createElement("a");
        a.download = "screen.png";
        a.href = canvas.toDataURL("image/png");
        document.body.appendChild(a);
        a.click();
        //document.body.appendChild(canvas)*/

        /*var data = canvas.toDataURL();
        var img  = document.createElement('img');
        img.setAttribute('download','myImage.png');
        //img.src  = 'data:image/png;base64,' + data;
        document.body.appendChild(img);*/

        var data = canvas.toDataURL();
        var myImg  = document.getElementById('myImg');
        //modalImg.src = this.src;
        //myImg.src = 'data:image/png;base64,' + data;
        myImg.src = data;

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
        }
        img.click();
        openSlider();
    });
    
}

/*
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

var ___gatsby = document.getElementById("___gatsby");
___gatsby.style.display = "block";
