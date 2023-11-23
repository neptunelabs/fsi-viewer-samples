document.addEventListener("DOMContentLoaded", function() {

  let instance

  document.getElementById("zoomBtn").addEventListener("click", () => {

    let teaser = true
    let teaserZoomPercent = 20

    instance = new $FSI.Viewer('zoomEle',{
      src: 'images/samples/Shoe/View2/sneaker-both-13.jpg',
      debug: true,
      plugins: 'resize,fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
    });

    instance.addListener('onReady', () => {
      hideImg()
      setTimeout(()=>{
        instance.setZoom(teaserZoomPercent, true, true)
      }, 500);
    })
    instance.addListener('onProgress', (percent) => {
      console.log('onProgress', percent)
    })
    instance.addListener('onViewChanged', (viewString) => {
      if (teaser) {
        teaser = false;
        setTimeout(() => {
          instance.resetView()
        }, 800);
      }
    })

    instance.start();

    function hideImg () {
      document.getElementById("zoomEle").style.visibility = "visible";
      document.getElementById("zoomImg").style.display = "none";
      document.getElementById("zoomBtn").style.display = "none";
    }

  });

});
