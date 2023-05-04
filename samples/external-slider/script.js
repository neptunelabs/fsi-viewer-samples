let elSlider, elViewer
let bChangeFromSlider

const switchImageSample = () => {
  for (let i = 1; i < 4; i++) {
    const el = document.getElementById('img' + i)
    $FSI.addEvent(el, 'click', onThumbnailClick)
  }
}

const onThumbnailClick = (evt) => {
  const img = evt.target

  if (img) {
    // get the src attribute
    const strImageURL = img.getAttribute('src')

    // get the "source" parameter value
    const src = $FSI.utils.getParameterValueFromURL(strImageURL, 'source')

    // change the image in FSI Viewer
    elViewer.changeImage({ imagePath: src })
  }
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

addEventListener('DOMContentLoaded', (event) => {

  elViewer = document.getElementById('image')
  elViewer.addListener('onZoomChanging', handleZoomChange)

  elSlider = document.getElementById('js-zoomslider')

  $FSI.addEvent(elSlider, 'input', handleSlider)

  switchImageSample()
})
