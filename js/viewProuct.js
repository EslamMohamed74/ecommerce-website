window.onload = function () {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get("id");

    let allProduct = JSON.parse(localStorage.getItem("allProucts") || "[]");
    let productToView = allProduct.filter(proudct => proudct.ProductId == id);

    let productImg = document.getElementById("product-img");
    let productInfo = document.getElementById("product-info");
    let productCart = document.getElementById("product-cart");

    let img = document.createElement("img");
    img.src = productToView[0].ProductPicUrl;
    img.alt = productToView[0].Name;
    img.classList.add("img-fulid");
    productImg.appendChild(img);

    let category = document.createElement("small");
    category.classList.add("text-secondary");
    let categoryText = document.createTextNode(productToView[0].Category);
    category.appendChild(categoryText);
    productInfo.appendChild(category);

    let productName = document.createElement("p");
    productName.classList.add("mt-2");
    let productNameText = document.createTextNode(productToView[0].Name);
    productName.appendChild(productNameText);
    productName.setAttribute("id","productName");
    productInfo.appendChild(productName);

    let productDescription = document.createElement("p");
    let productDescriptionText = document.createTextNode(productToView[0].Description);
    productDescription.appendChild(productDescriptionText);
    productInfo.appendChild(productDescription);

    let productAvailability = document.createElement("p");
    let productAvailabilityText = document.createTextNode("availability : ");
    productAvailability.appendChild(productAvailabilityText);
    productStatus = document.createElement("span");
    if (productToView[0].Status == "Available") {
        productStatus.style.color = "green";
        productStatusText = document.createTextNode("In Stock");
    } else {
        productStatus.style.color = "red";
        productStatusText = document.createTextNode("Out Stock");
    }

    productStatus.appendChild(productStatusText);
    productAvailability.appendChild(productStatus);
    productCart.appendChild(productAvailability);

    let line = document.createElement("hr");
    productCart.appendChild(line);

    let producPrice = document.createElement("h2");
    let producPriceText = document.createTextNode("$" + productToView[0].Price);
    producPrice.appendChild(producPriceText);
    productCart.appendChild(producPrice);

    let productQuantity = document.createElement("p");
    productQuantity.classList.add("mt-4");
    let productQuantityText = document.createTextNode("Quantity:");
    productQuantity.appendChild(productQuantityText);
    productCart.appendChild(productQuantity);

    let inputQuantity = document.createElement("input");
    inputQuantity.type = "number";
    inputQuantity.classList.add("form-control");
    inputQuantity.min = 1;
    inputQuantity.value = 1;
    inputQuantity.style.borderRadius = "10px";
    inputQuantity.setAttribute("id","inputQuantity");
    productCart.appendChild(inputQuantity);

    let toCartButton = document.createElement("button");
    toCartButton.classList.add("btn");
    toCartButton.classList.add("btn-light");
    toCartButton.classList.add("mt-5");
    toCartButton.style.borderRadius = "20px"
    toCartButton.style.padding = "20px"
    toCartButton.style.width = "200px"

    let inButton = document.createElement("span");

    let cartImg = document.createElement("img");
    cartImg.src = "./shopping-cart.png"
    cartImg.alt = "shopping cart image"
    cartImg.style.paddingRight = "10px"
    inButton.appendChild(cartImg);
    let toCartButtonText = document.createTextNode("Add To Cart");
    inButton.appendChild(toCartButtonText);

    toCartButton.appendChild(inButton);
    productCart.appendChild(toCartButton);

}
