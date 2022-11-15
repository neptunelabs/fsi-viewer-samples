function changeImage(buttonID) {
  let img;
  let src;
  let curImage = document.getElementById('image');
  switch (buttonID) {
    case "0":
      img =  '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/furniture/architect-2071534.jpg&rect=0.16764,0,0.66471,1&width=840';
      src = 'images/samples/ssi/furniture/architect-2071534.jpg';
      break
    case "1":
      img = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/furniture/architecture-2050197.jpg&rect=0.18441,0,0.66471,1&width=840';
      src = 'images/samples/ssi/furniture/architecture-2050197.jpg';
      break
    default:
      img = '{{{fsi.server}}}/{{{fsi.context}}}/server?type=image&source=images/samples/ssi/furniture/architect-2071534.jpg&rect=0.16764,0,0.66471,1&width=840';
      src = 'images/samples/ssi/furniture/architect-2071534.jpg';
  }
  curImage.src = img;
  document.getElementsByTagName("fsi-viewer")[0].changeConfig(undefined, {imagesrc: src});
}

