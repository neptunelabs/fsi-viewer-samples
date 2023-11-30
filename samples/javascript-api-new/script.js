document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('zoomBtn').addEventListener('click', () => {
    let showTeaser = true
    let teaserZoomPercent = 10

    const container = document.getElementById('zoomEle');
    const instance = $FSI.createNode("fsi-viewer", {
      src: 'images/samples/Shoe/View2/sneaker-both-13.jpg',
      debug: false,
      plugins: 'fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
      id : 'myViewer'
    })
    container.appendChild(instance)

    function showViewer() {
      // show FSI Viewer instance and hide image
      container.style.visibility = 'visible'
      document.getElementById('zoomImg').style.display = 'none'
      document.getElementById('zoomBtn').style.display = 'none'
      if (showTeaser) {
        setTimeout(() => {
          instance.setZoom(teaserZoomPercent, true, true)
        }, 500)
      }
    }

    function viewChange() {
      if (showTeaser) {
        showTeaser = false
        setTimeout(() => {
          // reset viewer - the user can interact with the UI
          instance.resetView()
        }, 800)
      }
    }

    instance.start()

    instance.addListener("onReady", showViewer);
    instance.addListener("onViewChanged", viewChange);
  })

})
