let mylist = document.getElementById("products")

var myServer = new XMLHttpRequest();

myServer.open("get", "https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json");

myServer.send();

myServer.onreadystatechange = function () {
    if (this.readyState == 4) {
        let allData = JSON.parse(this.responseText);
        let data = allData["ProductCollection"];

            for(let i=0;i<data.length; i++){
                let productDiv = document.createElement("div");
            productDiv.classList.add("card");
            productDiv.classList.add("m-2");
            productDiv.style.width="300px";
            // product.style.borders="5px";
            // product.style.borderColor="black"

            let productImg = document.createElement("img");
            productImg.src=data[i].ProductPicUrl;
            productImg.alt=data[i].Name;
            productImg.classList.add("card-img-top");
            productImg.style.height="300px";

            let productBodyDiv = document.createElement("div");
            productBodyDiv.classList.add("card-body");

            let productName = document.createElement("h4");
            let productNameText =  document.createTextNode(data[i].Name);
            productName.classList.add("card-title")
            productName.classList.add("text-primary")
            productName.appendChild(productNameText);

            

            let productPrice = document.createElement("p");
            let productPriceText = document.createTextNode("$"+data[i].Price)
            productPrice.classList.add("text-danger")
            productPrice.appendChild(productPriceText)
            productPrice.style.display="inline-block"

            let cartImg = document.createElement("img");
            cartImg.src="./shopping-cart.png"
            cartImg.alt="shopping cart image"
            cartImg.style.float="right";
            cartImg.onclick = function() { alert('blah'); };

            productBodyDiv.appendChild(productName);
            productBodyDiv.appendChild(productPrice);
            productBodyDiv.appendChild(cartImg);
            productDiv.appendChild(productImg);
            productDiv.appendChild(productBodyDiv);
            mylist.appendChild(productDiv);
        }
    }
};