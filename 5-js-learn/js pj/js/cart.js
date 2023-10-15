// variable
const productList = document.querySelector("#productList");
const productDetail = document.querySelector("#productDetailModal");
const productDetailModal = new bootstrap.Modal(productDetail);
// const showDetailModal = new bootstrap.Modal("#showDetailModal");
// function
// FRAGMENT mox append lote hma ya
const star = (isFill) => {
    const i = document.createElement("i");
    i.classList.add("bi", isFill ? "bi-star-fill" : "bi-star", "ms-1");
    return i;
}
const stars = (num) => {
    const result = document.createDocumentFragment();  
    for(let i=1; i<=5; i++){
        result.append(star(Math.floor(num)>=i));
    }
    return result;
}

// ${stars(product.rating)} nat htae lox ya
// const stars = (num) => {
//     let result = "";
//     for(let i=1; i<=5; i++){
//         if(Math.floor(num)>=i){
//         result += "<i class='bi bi-star-fill'></i>";
//         }else{
//         result += "<i class='bi bi-star'></i>";
//         }
//     }
//     return result;
// } 

const showProductDetailModal = (product) => {
    // console.log(product);
    productDetail.querySelector(".modal-title").innerText = product.title;
    productDetail.querySelector(".product-detail-img").src = product.thumbnail;
    productDetail.querySelector(".product-detail-description").innerText = product.description;
    productDetailModal.show();
}

const productCardUI = (product) => {
    const div = document.createElement("div");
    div.className = "col-12 col-md-6 col-lg-4";
    div.innerHTML = `
    <div class="card product-card">
        <div class="card-body">
            <img src=${product.thumbnail} class="mb-3 product-card-img" alt="">
            <h4 class="text-truncate mb-3">${product.title}</h4>
            <div class="d-flex justify-content-between">
                <p class="badge bg-dark">${product.category}</p>
                <div class="stars">
                    
                </div>
            </div>
            <p class="small text-black-50 text-truncate">${product.description}</p>
            <hr>

            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0">$ <span class="product-card-price">549</span></p>
                <button class="btn btn-outline-dark btn-sm">Add To Cart</button>
            </div>
        </div>
    </div>
`
div.querySelector(".stars").append(stars(product.rating));
div.addEventListener("click",showProductDetailModal.bind(null,product))
return div;
};


// process 
products.forEach(product => {
    productList.append(productCardUI(product))
})