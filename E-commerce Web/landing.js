gsap.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".hero-title", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from(".hero-description", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.8,
    ease: "power2.out"
});

gsap.from(".hero-buttons", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 1.1,
    ease: "power2.out"
});

gsap.from(".stats", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 1.4,
    ease: "power2.out"
});

gsap.from(".hero-image", {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    ease: "back.out(1.7)"
});

gsap.utils.toArray(".feature-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: i * 0.2,
        ease: "power2.out"
    });
});

gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        delay: i * 0.2,
        ease: "back.out(1.2)"
    });
});

let displayFeaturedProducts = () => {
    let productsContainer = document.querySelector('#featured-products-preview');
    
    if (!productsContainer) return;
    
    fetch('https://fakestoreapi.com/products?limit=4')
        .then(response => response.json())
        .then(products => {
            productsContainer.innerHTML = '';
            
            products.forEach(product => {
                productsContainer.innerHTML += `
                    <div class="col-lg-3 col-md-6">
                        <div class="product-card">
                            <img src="${product.image}" class="card-img-top" alt="${product.title}">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <div class="product-rating mb-2">
                                    ${generateStars(product.rating.rate)}
                                    <span class="ms-1 text-muted">(${product.rating.count})</span>
                                </div>
                                <p class="card-text fw-bold text-primary mb-3">$${product.price}</p>
                                <a href="e-com.html" class="btn btn-primary w-100">View Details</a>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

let generateStars = (rating) => {
    let stars = '';
    let fullStars = Math.floor(rating);
    let hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star text-warning"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt text-warning"></i>';
        } else {
            stars += '<i class="far fa-star text-warning"></i>';
        }
    }
    
    return stars;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    
    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach(section => {
            let top = section.offsetTop - 100;
            let bottom = top + section.offsetHeight;
            let scroll = window.scrollY;
            
            if (scroll >= top && scroll < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.getAttribute('id')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});