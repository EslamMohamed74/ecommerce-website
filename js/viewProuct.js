window.onload = function () {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get("id");

    let allProduct = JSON.parse(localStorage.getItem("allProucts") || "[]");
    let productToView = allProduct.filter(proudct => proudct.ProductId == id);


}

