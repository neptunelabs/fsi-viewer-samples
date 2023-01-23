const switchImageSample = ()  => {
  for (let i = 1; i < 4; i++) {
    const el = document.getElementById('img' + i)
    $FSI.addEvent(el, 'click', onThumbnailClick)
  }
}

const onThumbnailClick = ()  => {
  const img = this.getElementsByTagName('img')

  if (img && img[0]) {
    // get the src attribute
    const strImageURL = img[0].getAttribute('src')

    // get the "source" parameter value
    const src = $FSI.utils.getParameterValueFromURL(strImageURL, 'source')

    // change the image in FSI Viewer
    const parameters = { imagePath: src }
    const viewer = document.getElementById('image')
    viewer.changeImage(parameters)
  }
}

function initSlider() {
  new ZoomSliderControl(document.getElementById('image'), document.getElementById('js-zoomslider'))
}

const ZoomSliderControl = (elViewer, elSlider)  => {
  let bChangeFromSlider

  const init = () => {
    $FSI.addEvent(elSlider, 'input', handleSlider)
    elViewer.addListener('onZoomChanging', handleZoomChange)
  }

  const handleZoomChange = (fScale, fScaleMax, fPercent) => {
    if (bChangeFromSlider) return
    elSlider.value = fPercent
  }

  const handleSlider = (evt) => {
    bChangeFromSlider = true
    const fPercent = evt.target.value
    elViewer.setZoom(fPercent, false, false)
    bChangeFromSlider = false
  }

  init()
}

addEventListener('DOMContentLoaded', (event) => {
  initSlider();
  switchImageSample();
});
