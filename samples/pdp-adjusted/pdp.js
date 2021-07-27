document.getElementById("fsiViewerContainer").call = function() {buildFSIViewer()};

function buildFSIViewer() {
  this.fsiViewerEl = new $FSI.Viewer()
  let oParameters = {
    debug: true,
    skin: 'white',
    src: '{{{sources.images}}}/shoes/blue.jpg',
    useDevicePixelRatio: true};
    console.log('viewer init!')
    this.fsiViewerEl.start()
    console.log('start!')
    fsiViewerEl.changeConfig(oParameters);
}
