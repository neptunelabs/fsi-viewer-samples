const productDataFile = 'dress-data.json'

class PDP {
  constructor(dataFile) {
    this.dataFile = dataFile

    this.productData = {}
    this.selection = {}

    // Templates defined in project/env.yml and replaced by grunt
    this.fsiServer = '{{{fsi.server}}}/{{{fsi.context}}}'
    this.srcRoot = '{{{sources.images}}}/json'
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
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        // expose loaded product data
        that.productData = data
        // Start build fsi-viewer before rendering other stuff
        that.buildFSIViewer()
      })
      .catch(function (err) {
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
      debug: true,
      skin: 'white',
      id: 'image',
      imagesrc: '{{{sources.images}}}/json/burgundy.jpg',
      useDevicePixelRatio: true,
      onReady: () => {
        this.initProduct()
      },
    })
    console.log('viewer init!')
    this.fsiViewerEl.start()

    console.log('start!')

  }


/*
 Fill the data from json into HTML elements from the template
 */
initProduct() {
  this.fill('productName', this.productData.name)
  this.fill('productProducer', this.productData.producer)
  this.fill('productSeller', this.productData.seller)

  this.fill('productRatings', this.productData.rating.ratings)
  this.writeStars('productStars', this.productData.rating.stars)

  this.fill('productDescHead', this.productData.detail.head)
  this.fill('productDescHTML', this.productData.detail.html, true)

  this.setProgress(this.productData.stockCount)
  this.addMouseMeter(this.productData.stockCount)

  this.buildLayerAccordion()

  this.buildProductVariants()

  this.handleLayerSelector(this.productData.initLayer, true)
}
buildProductVariants() {
  const selAccordionEl = document.createElement('div')
  const productVariantsEl = document.getElementById('productVariants')
  productVariantsEl.appendChild(selAccordionEl)
}


startViewer(layerElement, groupName, groupData) {
  let imagesrc;
  Object.keys(groupData).forEach((groupKey) => {
    if (groupKey !== '_') {

      imagesrc: this.srcRoot + '/' + groupData[groupKey].img;

      var parameters = {"imagePath" : imagesrc};
      var viewer = document.getElementById("fsiViewerContainer");
      viewer.changeImage(parameters)
    }
  })
}

fill(id, content, isHTML) {
  const el = document.getElementById(id)
  if (el) {
    if (isHTML) el.insertAdjacentHTML('beforeend', content)
    else el.textContent = content
  }
}

/*
 Write rating stars as tags
 */
writeStars(id, value) {
  const fullStars = Math.floor(value)
  const halfStars = value - fullStars
  for (let s = 0; s < fullStars; s++) {
    this.fill(id, '<i class="bi bi-star-fill"></i>', true)
  }
  if (halfStars < 0.25) {
    this.fill(id, '<i class="bi bi-star"></i>', true)
  } else if (halfStars < 0.9) {
    this.fill(id, '<i class="bi bi-star-half"></i>', true)
  } else {
    this.fill(id, '<i class="bi bi-star-fill"></i>', true)
  }
}

getCheckName(groupName) {
  return 'check_' + groupName
}

setProgress(value) {
  let stockCounterEl = document.getElementById('stockCounter')
  let stockParentEl = document.getElementById('stockParent')
  stockCounterEl.style.width = value + '%'
  if (value > 0) {
    stockCounterEl.textContent = value + ' in stock'
    stockParentEl.textContent = ''
  } else {
    stockParentEl.textContent = 'Sold out!'
  }
}

/*
 Add 'Sold out' event handler
 */
addMouseMeter(maxInStock) {
  window.addEventListener('mousemove', (mouseEvent) => {
    const cardBtnEl = document.getElementById('cardBtn')
    const distance = this.getMouseDistance(mouseEvent, cardBtnEl)
    if (distance < 200) {
      // cubic approximate function
      let inStock1 = Math.min(maxInStock, Math.max(0, distance - maxInStock)) / maxInStock
      let inStock31 = Math.round((1 - Math.pow(1 - inStock1, 2)) * maxInStock)

      this.setProgress(inStock31)

      if (inStock31 <= 0 && !cardBtnEl.getAttribute('disabled')) {
        cardBtnEl.setAttribute('disabled', 'disabled')
      } else if (distance >= 100 && cardBtnEl.getAttribute('disabled')) {
        cardBtnEl.removeAttribute('disabled')
      }
    }
  })
}

/*
 Calc mouse distance to 'Add to Cart' button - for 'Sold out' function
 */
getMouseDistance(mouseEvent, el) {
  const rect = el.getBoundingClientRect()

  const elX = (rect.right - rect.left) / 2 + rect.left
  const elY = (rect.bottom - rect.top) / 2 + rect.top

  const dx = elX + (window.pageXOffset || document.documentElement.scrollLeft) - mouseEvent.pageX
  const dy = elY + (window.pageYOffset || document.documentElement.scrollTop) - mouseEvent.pageY

  return Math.abs(Math.round(Math.sqrt(dx * dx + dy * dy)))
}
}

// Start everything if DOM is ready
document.addEventListener('DOMContentLoaded', (event) => {
  // load and init product data
  const pdl = new PDP(productDataFile)
  pdl.init()
})
