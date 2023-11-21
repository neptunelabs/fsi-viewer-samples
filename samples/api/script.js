document.addEventListener("DOMContentLoaded", function() {


  document.getElementById("zoomBtn").addEventListener("click", () => {

    const instance = new $FSI.Viewer('zoomEle',{
      src: 'images/samples/Shoe/View2/sneaker-both-13.jpg',
      debug: true,
      plugins: 'resize,fullScreen',
      skin: 'example',
      width: '640',
      height: '427',
      onReady: () => {
        hideImg()
      },});
    instance.start();

    function hideImg () {
      document.getElementById("zoomEle").style.visibility = "visible";
      document.getElementById("zoomImg").style.display = "none";
      document.getElementById("zoomBtn").style.display = "none";
    }
  });

});
