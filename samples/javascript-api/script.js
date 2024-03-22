document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('zoomBtn').addEventListener('click', () => {

    let showTeaser = true
    const teaserZoomPercent = 10

    const show = () => {
      // show FSI Viewer instance and hide image
      document.getElementById('zoomEle').style.visibility = 'visible'
      document.getElementById('zoomImg').style.display = 'none'
      document.getElementById('zoomBtn').style.display = 'none'
      if (showTeaser) {
        setTimeout(() => {
          instance.setZoom(teaserZoomPercent, true, true)
        }, 500)
      }
    }

    const instance = $FSI.createNode('fsi-viewer', {
      src: 'images/samples/Shoe/View2/sneaker-both-13.jpg',
      debug: false,
      plugins: 'fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
      id: 'myViewer',
      onReady: show,
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
    document.getElementById('zoomEle').appendChild(instance)
  })

})
