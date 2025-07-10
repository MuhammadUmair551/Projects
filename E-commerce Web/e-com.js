//  GSAP
gsap.from(".hero-section h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".hero-section p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from(".hero-section .input-group", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
    ease: "power2.out"
});


let displayProducts = () => {
    let productsContainer = document.querySelector('#featured-products');

    fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then((data) => {
            data.forEach((val, idx) => {
                console.log(val);
                productsContainer.innerHTML += ` <div class="col-md-4 col-lg-3">
                <div class="card">
                    <span class="position-absolute top-0 end-0 m-2 badge badge-custom">New</span>
                    <img src="${data[idx].image}" class="card-img-top"
                        alt="Product">
                    <div class="card-body">
                        <h5 class="card-title">${data[idx].title}</h5>
                        <p class="product-category text-muted text-decoration-underline">${data[idx].category}</p>
                        <div class="product-rating mb-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ms-1">${data[idx].rating.rate}</span>
                        </div>
                        <p class="card-text text-success fw-bold">${data[idx].price} $</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-custom" onclick="addToCart(this)">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>`;


            })

        });


}
displayProducts();

let displayMensClothing = () => {
    let productsContainer = document.querySelector('#featured-products');
    productsContainer.innerHTML = '';
    let idx1 = 0;
    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
        .then(mensdata => mensdata.json())
        .then((mensdata) => {
            mensdata.forEach((val, idx1) => {
                productsContainer.innerHTML += `<div class="col-md-4 col-lg-3">
                <div class="card">
                    <span class="position-absolute top-0 end-0 m-2 badge badge-custom">New</span>
                    <img src="${mensdata[idx1].image}" class="card-img-top"
                        alt="Product">
                    <div class="card-body">
                        <h5 class="card-title">${mensdata[idx1].title}</h5>
                        <p class="product-category text-muted text-decoration-underline">${mensdata[idx1].category}</p>
                        <div class="product-rating mb-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ms-1">${mensdata[idx1].rating.rate}</span>
                        </div>
                        <p class="card-text text-success fw-bold">${mensdata[idx1].price} $</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-custom" onclick="addToCart(this)">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>`
            })
        })
}


let displayWomensClothing = () => {
    let productsContainer = document.querySelector('#featured-products');
    productsContainer.innerHTML = '';
    let idx1 = 0;
    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
        .then(womensdata => womensdata.json())
        .then((womensdata) => {
            console.log(womensdata);
            console.log(womensdata[idx1].title);
            womensdata.forEach((val, idx1) => {
                productsContainer.innerHTML += `<div class="col-md-4 col-lg-3">
                <div class="card">
                    <span class="position-absolute top-0 end-0 m-2 badge badge-custom">New</span>
                    <img src="${womensdata[idx1].image}" class="card-img-top"
                        alt="Product">
                    <div class="card-body">
                        <h5 class="card-title">${womensdata[idx1].title}</h5>
                        <p class="product-category text-muted text-decoration-underline">${womensdata[idx1].category}</p>
                        <div class="product-rating mb-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ms-1">${womensdata[idx1].rating.rate}</span>
                        </div>
                        <p class="card-text text-success fw-bold">${womensdata[idx1].price} $</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-custom" onclick="addToCart(this)">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>`
            })
        })
}

let displayJewelery = () => {
    let productsContainer = document.querySelector('#featured-products');
    productsContainer.innerHTML = '';
    let idx1 = 0;
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(jewdata => jewdata.json())
        .then((jewdata) => {
            console.log(jewdata);
            console.log(jewdata[idx1].title);
            jewdata.forEach((val, idx1) => {
                productsContainer.innerHTML += `<div class="col-md-4 col-lg-3">
                <div class="card">
                    <span class="position-absolute top-0 end-0 m-2 badge badge-custom">New</span>
                    <img src="${jewdata[idx1].image}" class="card-img-top"
                        alt="Product">
                    <div class="card-body">
                        <h5 class="card-title">${jewdata[idx1].title}</h5>
                        <p class="product-category text-muted text-decoration-underline">${jewdata[idx1].category}</p>
                        <div class="product-rating mb-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ms-1">${jewdata[idx1].rating.rate}</span>
                        </div>
                        <p class="card-text text-success fw-bold">${jewdata[idx1].price} $</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-custom" onclick="addToCart(this)">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>`
            })
        })
}

let displayElectronics = () => {
    let productsContainer = document.querySelector('#featured-products');
    productsContainer.innerHTML = '';
    let idx1 = 0;
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(elecdata => elecdata.json())
        .then((elecdata) => {
            elecdata.forEach((val, idx1) => {
                productsContainer.innerHTML += `<div class="col-md-4 col-lg-3">
                <div class="card">
                    <span class="position-absolute top-0 end-0 m-2 badge badge-custom">New</span>
                    <img src="${elecdata[idx1].image}" class="card-img-top"
                        alt="Product">
                    <div class="card-body">
                        <h5 class="card-title">${elecdata[idx1].title}</h5>
                        <p class="product-category text-muted text-decoration-underline">${elecdata[idx1].category}</p>
                        <div class="product-rating mb-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ms-1">${elecdata[idx1].rating.rate}</span>
                        </div>
                        <p class="card-text text-success fw-bold">${elecdata[idx1].price} $</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-custom" onclick="addToCart(this)">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>`
            })
        })
}

let viewAll = () => {
    let productsContainer = document.querySelector('#featured-products');
    productsContainer.innerHTML = '';
    displayProducts();
}

let searchProducts = () => {
    let searchInput = document.querySelector('.search-inp').value.toLowerCase().trim();
    let productsCards = document.querySelectorAll('#featured-products .card');

    productsCards.forEach((card)=>{
        let title = card.querySelector(".card-title").textContent.toLowerCase().trim();
        if(title.includes(searchInput)){
            card.parentElement.style.display = "block"
        }else{
            card.parentElement.style.display = "none"
        }
    })
}


let cart = [];
console.log(cart);
let addToCart = (e) => {
    const product = e.parentElement.parentElement.parentElement.querySelector('.card-body');
    cart.push({
        title: product.querySelector('.card-title').innerText,
        price: product.querySelector('.card-text').innerText,
        image: product.parentElement.querySelector('.card-img-top').src
    });
    alert(`Product has been added to your cart!`);
    updateCartCount();
}

let updateCartCount = () => {
    document.querySelector('.cart-count').textContent = cart.length;
}

let toggleCart = () => {
    document.getElementById("cartSidebar").classList.toggle("open");
    showcartItem();
}

let showcartItem = () => {
    let cartItemsContainer = document.querySelector('#cartItems');
    let cartTotalContainer = document.querySelector('.price-container');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-center">Your cart is empty.</p>`;
        cartTotalContainer.innerHTML = '';
        return;
    }

    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item d-flex justify-content-between align-items-center mb-3">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image" style="width: 50px; height: 50px;">
                <div class="cart-item-details px-3 flex-grow-1">
                    <h6 class="cart-item-title mb-1">${item.title}</h6>
                    <p class="cart-item-price text-primary mb-0">${item.price}</p>
                </div>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`;
    });

    cartTotalContainer.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mt-3 p-3 bg-warning rounded">
            <h5 class="mb-0">Total:</h5>
            <h4 class="mb-0 text-success">$${priceTotal()}</h4>
        </div>
        <div class="d-grid mt-3">
            <button class="btn btn-custom" onclick="confirmOrder()">Proceed!</button>
        </div>
    `;
}

let removeFromCart = (index) => {
    cart.splice(index, 1)
    updateCartCount();
    showcartItem();
}

let priceTotal = () => {
    return cart.reduce((total, item) => {
        let price = parseFloat(item.price.replace('$', ''));
        return total + price;
    }, 0).toFixed(2);
}

let confirmOrder = () => {
    Swal.fire({
        title: 'Confirm Order',
        text: `Total Amount: $${priceTotal()}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Place Order',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Order Placed!',
                'Your order has been placed successfully.',
                'success'
            );
            cart = [];
            updateCartCount();
            showcartItem();
        }
    });
}