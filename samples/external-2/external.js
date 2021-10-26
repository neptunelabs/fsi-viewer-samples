function showHideExternalButton(elButton, strButtonID, bPresentInViewer){
  if (!bPresentInViewer) elButton.style.display = "none";
  else elButton.style.display = "";
}

function switchImageSample() {
  for (var i = 1; i < 4; i++){
    var el = document.getElementById("img" + i);
    $FSI.addEvent(el, "click", onThumbnailClick);
  }
}

function onThumbnailClick(){

  var img = this.getElementsByTagName("img");

  if (img && img[0]){

    // get the src attribute
    var strImageURL = img[0].getAttribute("src") ;

    // get the "source" parameter value
    var src = $FSI.utils.getParameterValueFromURL(strImageURL, 'source');

    // change the image in FSI Viewer
    var parameters = {"imagePath" : src};
    var viewer = document.getElementById("image");
    viewer.changeImage(parameters)
  }
}
