// Put your application javascript here
let sortBy = document.querySelector("#sort_by");
if (sortBy != null) {
  sortBy.addEventListener("change", function (e) {
    let url = new URL(window.location.href);
    url.searchParams.set("sort_by", e.currentTarget.value);
    window.location = url;
  });
}

// if (document.getElementById("AddressCountryNew") !== null) {
//   document.getElementById("AddressCountryNew").addEventListener("change", function (e) {
//     let provinces = this.options[this.selectedIndex].getAttribute("data-prvinces");
//     let provinceSelector = document.getElementById("AddressProvinceNew");
//     let provinceArray = JSON.parse(provinces);
//     if (provinceArray.length < 1) {
//       provinceSelector.setAttribute("disabled", "disabled");
//     } else {
//       provinceSelector.removeAttribute("disabled");
//     }
//     provinceSelector.innerHTML = "";
//     let options = "";
//     for (let index = 0; index < provinceArray.length; index++) {
//       options += '<option value="' + provinceArray[index][0] + '">' + provinceArray[index][0] + "</option>";
//     }
//     provinceSelector.innerHTML = options;
//   });
// }

if (document.getElementById("forgotPassoword") !== null) {
  document.getElementById("forgotPassoword").addEventListener("click", function (e) {
    let element = document.querySelector("#forgot_passoword_form");
    if (element.classList.contains("d-none")) {
      element.classList.remove("d-none");
      element.classList.add("d-block");
    }
  });
}

let prdouctInfoAnchors = document.querySelectorAll("#productInfoAnchor");
let productModal = new bootstrap.Modal(document.getElementById("productInfoModal"));

if (prdouctInfoAnchors.length > 0) {
  prdouctInfoAnchors.forEach((item) => {
    item.addEventListener("click", (event) => {
      let url = "/product/" + item.getAttribute("product-handle") + ".js";
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          document.getElementById("productInfoImg").src = data.images[0];
          document.getElementById("productInfoTitle").innerHTML = data.title;
          document.getElementById("productInfoPrice").innerHTML = item.getAttribute("product-price");
          document.getElementById("productInfoDescription").innerHTML = data.description;
          productModal.show();
        });
    });
  });
}
