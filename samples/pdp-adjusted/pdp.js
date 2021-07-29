const productDataFile = 'shoe-data.json'

class PDP {
  constructor(dataFile) {
    this.dataFile = dataFile

    this.productData = {}
    this.selection = {}

    // Templates defined in project/env.yml and replaced by grunt
    this.fsiServer = '{{{fsi.server}}}/{{{fsi.context}}}'
    this.srcRoot = '{{{sources.images}}}/shoes'
    this.assetRoot = '{{{sources.static}}}/product-detail'

    this.dataFile = this.fsiServer + '/static/' + this.assetRoot + '/' + dataFile
  }

  /*
   Load a JSON via REST - there is no exception handling here
   */
  init() {
    let reqHeader = new Headers()
    reqHeader.append('Content-Type', 'text/json')
    let initObject = {
      method: 'GET',
      headers: reqHeader,
    }

    const that = this
    fetch(this.dataFile, initObject)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        // expose loaded product data
        that.productData = data
        // Start build fsi-viewer before rendering other stuff
        that.buildFSIViewer()
      })
      .catch(function(err) {
        console.log('Something went wrong!', err)
      })
  }

  /*
   Create a new FSI Viewer instance - launch initProduct after the instance is ready
   */
  buildFSIViewer() {
    const containerEl = document.getElementById('fsiViewerContainer')
    this.fsiViewerEl = new $FSI.Viewer()
    this.fsiViewerEl.init(containerEl, {
      name: 'articleLayer',
      debug: true,
      skin: 'white',
      src: '{{{sources.images}}}/shoes/blue.jpg',
      useDevicePixelRatio: true
    })
    console.log('viewer init!')
    this.fsiViewerEl.id = 'articleLayer'
    console.log(this.fsiViewerEl.getBuild(), 'build!')
    this.fsiViewerEl.start()
    console.log('start!')
  }

}
// Start everything if DOM is ready
document.addEventListener('DOMContentLoaded', (event) => {
  // load and init product data
  const pdl = new PDP(productDataFile)
  pdl.init()
})
