const Sample = () => {
  return (

    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 g-3 pr-5 py-3">
        <div className="col">
          <FSIComponent tagName="fsi-viewer" id={"Viewer_2D"} width={"100%"} height={"500px"} src={"images/samples/bag.tif"}
                        plugins={"FullScreen,Resize"} />
        </div>
        <div className="col mx-auto">
          <div className="p-3 text-left">
            <h2 className="display-5">Camu</h2>
            <p>Sneaker, Camouflage Suede</p>
            <p></p>
            <p>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <small>(4664) Ratings</small>
            </p>
            <p>Sturdy, classy and minimal.</p>
            <p>Nice shoe for any occasion. The minimal design fits a lot of outfits.</p>
            <p>
              <small>Dispatched in 4 working days</small>
            </p>
            <div className="btn-group py-3">
              <button type="button" className="btn btn-lg btn-outline-dark">Add to basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
)
  ;
};
