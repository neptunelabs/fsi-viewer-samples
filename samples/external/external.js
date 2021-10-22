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
