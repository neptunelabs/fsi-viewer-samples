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

const mainImage = document.querySelector("#main-img");
const thumbImage = document.querySelector("#thumb-img");
const price = document.querySelector("#price");
const comment = document.querySelector("#comment");
const thumbs = document.querySelector("#thumbs");

mainImage.src = products.burgundy.img;
price.textContent = products.burgundy.price;
comment.textContent = products.burgundy.comment;

for (const key in products) {
  const product = products[key];
  const div = document.createElement("div");
  div.style.width = product.width;
  div.style.height = product.height;

  const img = document.createElement("img");
  img.src = product.img;
  img.style.width = "100%";
  img.style.height = "100%";
  div.appendChild(img);
  div.addEventListener("click", function () {
    mainImage.src = product.img;
    price.textContent = product.price;
    comment.textContent = product.comment;
  });
  thumbs.appendChild(div);
}
