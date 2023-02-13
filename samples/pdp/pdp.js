const products = {
  dgrey: {
    width: "100%",
    height: "100%",
    img: "https://kb.neptunelabs.com/fsi/server?type=image&source=images/samples/showcase/json/dark-grey.jpg",
    price: 44.99,
    comment: "Dark Grey"
  },
  burgundy: {
    width: "100%",
    height: "100%",
    img: "https://kb.neptunelabs.com/fsi/server?type=image&source=images/samples/showcase/json/burgundy.jpg",
    price: 42.99,
    comment: "Burgundy"
  }
};

const mainImg = document.getElementById("main-img").firstElementChild;
const thumbs = document.getElementById("thumbs").children;
const priceContainer = document.getElementById("price");
const commentContainer = document.getElementById("comment");

const switchImageSample = () => {
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", e => {
      const img = e.target;
      const productId = img.parentNode.id;
      const product = products[productId];
      mainImg.src = product.img;
      priceContainer.textContent = `Price: $${product.price}`;
      commentContainer.textContent = product.comment;
    });
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  switchImageSample();
});
