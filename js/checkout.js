window.onload = function () {
    let tableBody = document.getElementById("tableBody");
    let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cartItems.forEach(function (item) {
        let trTable = document.createElement("tr");
        trTable.classList.add("cartRow")

        let productNameCol = document.createElement("td");

        let productImage = document.createElement("img");
        productImage.src = item.imgSrc;
        productImage.style.width = "150px";
        productImage.style.height = "150px";
        productImage.style.border = " 1px solid black";
        productImage.classList.add("mr-4")
        productNameCol.appendChild(productImage);


        let productName = document.createElement("p");
        productName.classList.add("d-inline")
        productName.classList.add("productName");
        let productNameText = document.createTextNode(item.name)
        productName.appendChild(productNameText)
        productNameCol.appendChild(productName);
        trTable.appendChild(productNameCol);

        let productPriceCol = document.createElement("td");
        let productPrice = document.createElement("p");
        productPrice.classList.add("d-inline")
        productPrice.classList.add("productPrice")
        productPriceText = document.createTextNode("$" + item.price)
        productPrice.appendChild(productPriceText);
        productPriceCol.appendChild(productPrice);
        trTable.appendChild(productPriceCol);

        let productQuantityCol = document.createElement("td");
        let inputQuantity = document.createElement("input");
        inputQuantity.type = "number";
        inputQuantity.classList.add("form-control");
        inputQuantity.min = 1;
        inputQuantity.value = item.quantity;
        inputQuantity.style.borderRadius = "10px";
        productQuantityCol.appendChild(inputQuantity);
        trTable.appendChild(productQuantityCol);

        let productTotalPriceCol = document.createElement("td");
        let productTotalPrice = document.createElement("p");
        productTotalPrice.classList.add("d-inline")
        productTotalPrice.classList.add("totalProductPrice");
        productTotalPriceText = document.createTextNode("$" + (item.price * item.quantity))
        productTotalPrice.appendChild(productTotalPriceText);
        productTotalPriceCol.appendChild(productTotalPrice);
        trTable.appendChild(productTotalPriceCol);
        

        let removeProductCol = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-danger");
        removeButton.innerHTML = "Remove";
        removeProductCol.appendChild(removeButton);
        trTable.appendChild(removeProductCol);
        tableBody.appendChild(trTable);
    });

} 

