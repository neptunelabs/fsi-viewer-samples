document.addEventListener("DOMContentLoaded", function() {

  let instance

  document.getElementById("zoomBtn").addEventListener("click", () => {

    instance = new $FSI.Viewer('zoomEle',{
      src: 'images/samples/Shoe/View2/sneaker-both-13.jpg',
      debug: true,
      plugins: 'resize,fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
      onReady: () => {
        hideImg()
      },
      onAnimationComplete: () => {
        setTimeout(changeZoom(), 500);
      }});
    instance.start();

    function hideImg () {
      document.getElementById("zoomEle").style.visibility = "visible";
      document.getElementById("zoomImg").style.display = "none";
      document.getElementById("zoomBtn").style.display = "none";
    }

    function changeZoom () {
      instance.setZoom('20', true, true)
      setTimeout(resetZoom, 500);
    }

    function resetZoom () {
      instance.resetView()
    }
  });

});
