// Declared variable object to store static texts.
const productStaticText = {
  lovedItAccessibilityText: "adicionar aos favoritos",
  productPriceAccessibilityText: ["De", "por"],
  productPriceMonetaryUnit: "R$ ",
  productPricePayment: ["em até ", "x de ", " sem juros"],
  addToCartAccessibilityText: " ao carrinho",
  addToCartLabel: "adicionar",
};

// Declared variable array of product objects to
// use as mockup data.
let productList = [
  {
    sku: "sku0000",
    name: "Monitor LED 27&Prime; Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    priceOf: "2.813,99",
    priceBy: "2.599,00",
    installmentPlan: "10",
    imgURL:
      "https://samsungbr.vtexassets.com/arquivos/ids/312084-285-189?v=637369886509730000&width=285&height=189&aspect=true",
    productURL: "#",
  },
  {
    sku: "sku0001",
    name: "Monitor Gamer Curvo Samsung 24&Prime;, Freesync, Série CRG50",
    priceOf: "1.250,00",
    priceBy: "1.187,50",
    installmentPlan: "10",
    imgURL:
      "https://samsungbr.vtexassets.com/arquivos/ids/312062-285-189?v=637369460623370000&width=285&height=189&aspect=true",
    productURL: "#",
  },
  {
    sku: "sku0002",
    name: "Monitor Curvo Samsung 32&Prime; FHD, com speaker embutido, HDMI, Display Port, VGA, 75hz, Freesync, Preto, Série CT550",
    priceOf: "2.790,00",
    priceBy: "2.650,50",
    installmentPlan: "10",
    imgURL:
      "https://samsungbr.vtexassets.com/arquivos/ids/311707-285-189?v=637346555901070000&width=285&height=189&aspect=true",
    productURL: "#",
  },
];
let productListRelated = [
  {
    sku: "sku0000",
    name: "Monitor LED 27&Prime; Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    priceOf: "2.813,99",
    priceBy: "2.599,00",
    installmentPlan: "10",
    imgURL:
      "https://samsungbr.vtexassets.com/arquivos/ids/312084-285-189?v=637369886509730000&width=285&height=189&aspect=true",
    productURL: "#",
  },
  {
    sku: "sku0001",
    name: "Monitor Gamer Curvo Samsung 24&Prime;, Freesync, Série CRG50",
    priceOf: "1.250,00",
    priceBy: "1.187,50",
    installmentPlan: "10",
    imgURL:
      "https://samsungbr.vtexassets.com/arquivos/ids/312062-285-189?v=637369460623370000&width=285&height=189&aspect=true",
    productURL: "#",
  },
];

// Declared variable to wrap the target selector
// and write the list itens.
const $productList = document.querySelector(".App");
const $productListRelated = document.querySelector(".js-products-related");
const $addToFavorites = document.querySelectorAll(".add-to-favorites");
const $addToCart = document.querySelectorAll(".add-to-cart");

// Function created to calc the installment, base
// on the info provide in the product data.
// This function is current be used on the
// function writeProductCardTemplate
const calcInstallmentValue = (installment, value) => {
  let _value = parseFloat(value.replace(".", ""));
  let _installment = parseFloat(installment);
  let result = (_value / _installment).toFixed(2);
  return result.toString().replace(".", ",");
};

// Function created to write the the template,
// it have two parameters with default values.
// If no one was passed the function will write
// a card in the tag "body" in the end of page.
// $target is for the target element in the page.
// productData is for the object with the product info.
const writeProductCardTemplate = (
  $target = document.querySelector("body"),
  productData = productList[0]
) => {
  $target.innerHTML += `
	<div class="card shadown" data-sku="${productData.sku}">
		<button class="add-to-favorites" type="button" form="favorites" data-plugin="toggle-class-target" data-target=".card" data-class="loved-it" data-flag="_parents">
			<span class="accessibility-text">${productStaticText.lovedItAccessibilityText}</span>
			<svg class="icon-heart" xmlns="http://www.w3.org/2000/svg">
				<path d="M23.1494 2.85655C22.5629 2.26797 21.8667 1.80107 21.1003 1.48251C20.334 1.16396 19.5126 1 18.6831 1C17.8535 1 17.0321 1.16396 16.2658 1.48251C15.4994 1.80107 14.8032 2.26797 14.2167 2.85655L12.9997 4.07749L11.7826 2.85655C10.5981 1.66822 8.99152 1.00062 7.31633 1.00062C5.64114 1.00062 4.03455 1.66822 2.85001 2.85655C1.66547 4.04489 1 5.65662 1 7.33718C1 9.01774 1.66547 10.6295 2.85001 11.8178L4.06705 13.0387L12.9997 22L21.9323 13.0387L23.1494 11.8178C23.7361 11.2295 24.2015 10.531 24.519 9.76219C24.8366 8.99339 25 8.16936 25 7.33718C25 6.50499 24.8366 5.68096 24.519 4.91216C24.2015 4.14336 23.7361 3.44486 23.1494 2.85655Z"/>
			</svg>
		</button>
		<a class="product-link img" href="${productData.productURL}">
			<div class="holder-product-img">
				<img class="product-img" src="${productData.imgURL}" alt="${productData.name}" loading="lazy" onload="this.classList.add('loaded');" crossorigin="anonymous">
			</div>
		</a>
		<h3 class="product-title">
			<a class="product-link title" href="${productData.productURL}">
				${productData.name}
			</a>
		</h3>
		<p class="product-price">
			<span class="of">
				<span class="accessibility-text">${productStaticText.productPriceAccessibilityText[0]}</span>
        ${productStaticText.productPriceMonetaryUnit}${productData.priceOf}
			</span>
			<span class="by">
				<span class="accessibility-text">${productStaticText.productPriceAccessibilityText[1]}</span>
        ${productStaticText.productPriceMonetaryUnit}${productData.priceBy}
			</span>
			<span class="payment">
				${productStaticText.productPricePayment[0]}
        <strong class="payment-type">${productData.installmentPlan}${productStaticText.productPricePayment[1]}${productStaticText.productPriceMonetaryUnit}${calcInstallmentValue(productData.installmentPlan,productData.priceBy)}</strong>
        ${productStaticText.productPricePayment[2]}
			</span>
			<button class="add-to-cart" type="button" form="cart" data-plugin="toggle-class-target" data-target=".card" data-class="added-to-cart" data-flag="_parents">
				<svg class="icon-check" xmlns="http://www.w3.org/2000/svg">
					<path d="M17 1L6 12L1 7"/>
				</svg>
        ${productStaticText.addToCartLabel}
        <span class="accessibility-text">${productStaticText.addToCartAccessibilityText}</span>
			</button>
		</p>
	</div>
	`;
};

// Function created to write a collection of
// objects with product info stored an a array
// The data parameter is for the source of data.
// The $target parameter is for element in the
// page the will receive the collection of cards.
const fillProductList = (data, $target) => {
  data.forEach((item) => {
    writeProductCardTemplate($target, item);
  });
};

// Calling the function to fill the list
fillProductList(productList, $productList);
fillProductList(productListRelated, $productListRelated);

// My old p{lugin, from my codepen https://codepen.io/adrianoenache/pen/RaZBZM
// in some time I will rewrite removing the jQuery from it.
var ToggleClassTarget = function (holder) {
  this.$button = $(holder);
  this.class = this.$button.data("class");

  if (this.$button.data("class-switch")) {
    this.classSwitch = this.$button.data("class-switch");
  }

  if (this.$button.data("flag") == "_parents") {
    this.target = $(this.$button).parents(this.$button.data("target"));
  } else if (this.$button.data("target") == "_self") {
    this.target = this.$button;
  } else {
    this.target = $(this.$button.data("target"));
  }

  this.init();
};

ToggleClassTarget.prototype = {
  init: function () {
    this.$button.click(
      function (event) {
        event.preventDefault();
        if (this.$button.data("class-switch")) {
          if (this.target.hasClass(this.class)) {
            this.target.removeClass(this.class);
            this.target.addClass(this.classSwitch);
          } else if (this.target.hasClass(this.classSwitch)) {
            this.target.removeClass(this.classSwitch);
            this.target.addClass(this.class);
          } else {
            this.target.addClass(this.class);
          }
        } else {
          this.target.toggleClass(this.class);
        }
      }.bind(this)
    );
  },
};

ToggleClassTarget.create = function () {
  $('[data-plugin="toggle-class-target"]').each(function (index, ele) {
    ele.ToggleClassTarget = new ToggleClassTarget(ele);
  });
};

$(document).ready(ToggleClassTarget.create);
