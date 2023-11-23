document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('zoomBtn').addEventListener('click', () => {

    let showTeaser = true
    let teaserZoomPercent = 10

    let instance = new $FSI.Viewer('zoomEle', {
      src: 'images/samples/Shoe/View2/sneaker-both-13.jpg',
      debug: false,
      plugins: 'fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
      // listen for finished loading FSI Viewer and becomes interactive
      onReady: () => {
        // show FSI Viewer instance and hide image
        document.getElementById('zoomEle').style.visibility = 'visible'
        document.getElementById('zoomImg').style.display = 'none'
        document.getElementById('zoomBtn').style.display = 'none'

        if (showTeaser) {
          setTimeout(() => {

            instance.setZoom(teaserZoomPercent, true, true)
          }, 500)
        }
      },
      // listen when zoom is finished
      onViewChanged: (view) => {
        if (showTeaser) {
          showTeaser = false
          setTimeout(() => {
            // reset viewer - the user can interact with the UI
            instance.resetView()
          }, 800)
        }
      },
    })

    instance.start()

  })

})
