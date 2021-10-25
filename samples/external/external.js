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

function initSlider() {
  new ZoomSliderControl(
    document.getElementById('image'),
    document.getElementById('js-zoomslider')
  );
}

  var ZoomSliderControl = function(elViewer, elSlider){
  var bChangeFromSlider;

  var init = function(){
  $FSI.addEvent(elSlider, 'input', handleSlider);
  elViewer.addListener('onZoomChanging', handleZoomChange);
}

  var handleZoomChange = function(fScale, fScaleMax, fPercent) {
  if (bChangeFromSlider) return;
  elSlider.value = fPercent;
};

  var handleSlider = function(evt){
  bChangeFromSlider = true;
  var fPercent = evt.target.value;
  elViewer.setZoom(fPercent, false, false);
  bChangeFromSlider = false;
};

  init();
};
