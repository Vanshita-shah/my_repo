const prdName = document.getElementById("productName");
const description = document.getElementById("productDescription");
const price = document.getElementById("productPrice");
const image = document.getElementById("productPhoto");
const imagePreview = document.getElementById("imgPreview");
const editBtn = document.getElementById("editBtn");
const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");
const photoUpload = document.getElementById("photoUpload");
const productPhoto = document.getElementById("productPhoto");
let productList = [];

if (localStorage.getItem("productList") != null) {
  productList = JSON.parse(localStorage.getItem("productList"));
}

const productID = new URLSearchParams(window.location.search).get("ProductID");
const products = JSON.parse(localStorage.getItem("productList"));
const productData = products.filter((product) => {
  return product.id == productID;
});
console.log(productData[0]);
prdName.value = productData[0].name;
description.value = productData[0].desc;
price.value = productData[0].price;
imagePreview.src = productData[0].image;

editBtn.addEventListener("click", () => {
  const formFields = document.querySelectorAll("input,textarea");
  for (field of formFields) field.removeAttribute("readonly");
  photoUpload.classList.remove("d-none");
  updateBtn.classList.remove("d-none");
  editBtn.classList.add("d-none");
});

cancelBtn.addEventListener("click", () => {
  const formFields = document.querySelectorAll("input,textarea");
  for (field of formFields) field.readOnly = true;
  photoUpload.classList.add("d-none");
  updateBtn.classList.add("d-none");
  editBtn.classList.remove("d-none");
  imagePreview.src = productData[0].image;
});

productPhoto.addEventListener("change", (e) => {
  if (productPhoto.files[0].size < 1000000) {
    let fReader = new FileReader();
    fReader.onload = (e) => {
      imgUrl = e.target.result;
    };
    fReader.readAsDataURL(productPhoto.files[0]);
  } else {
    console.log("File size too long");
  }
  console.log(e.target);
  const img = URL.createObjectURL(e.target.files[0]);
  console.log(img);
  const imgPreview = document.getElementById("imgPreview");
  imgPreview.src = img;
});

let imgUrl = productData[0].image;
updateBtn.addEventListener("click", () => {
  let index = productList.findIndex((product) => product.id == productID);
  productList[index].name = prdName.value;
  productList[index].desc = description.value;
  productList[index].price = price.value;
  productList[index].image = imgUrl;
  localStorage.setItem("productList", JSON.stringify(productList));
});