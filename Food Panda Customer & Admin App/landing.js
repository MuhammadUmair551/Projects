// Load categories from localStorage
let categories = JSON.parse(localStorage.getItem("category")) || [];
let items = JSON.parse(localStorage.getItem("items")) || [];

// Smooth scroll for navigation links
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

// Display categories
function displayCategories() {
    const container = document.getElementById('categories-container');
    if (!container) return;

    if (categories.length === 0) {
        // Default categories if none exist
        container.innerHTML = `
            <div class="col-md-3 col-6">
                <div class="category-card" onclick="window.location.href='user.html'">
                    <div class="category-icon"><i class="fa-solid fa-pizza-slice"></i></div>
                    <h5>Fast Food</h5>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="category-card" onclick="window.location.href='user.html'">
                    <div class="category-icon"><i class="fa-solid fa-bowl-food"></i></div>
                    <h5>Desi Food</h5>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="category-card" onclick="window.location.href='user.html'">
                    <div class="category-icon"><i class="fa-solid fa-ice-cream"></i></div>
                    <h5>Desserts</h5>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="category-card" onclick="window.location.href='user.html'">
                    <div class="category-icon"><i class="fa-solid fa-mug-hot"></i></div>
                    <h5>Beverages</h5>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    categories.slice(0, 4).forEach(cat => {
        container.innerHTML += `
            <div class="col-md-3 col-6">
                <div class="category-card" onclick="window.location.href='user.html'">
                    <div class="category-icon"><i class="fa-solid fa-utensils"></i></div>
                    <h5>${cat.category}</h5>
                </div>
            </div>
        `;
    });
}

// Display featured items
function displayFeaturedItems() {
    const container = document.getElementById('featured-items');
    if (!container) return;

    if (items.length === 0) {
        // Default items if none exist
        container.innerHTML = `
            <div class="col-md-3 col-6">
                <div class="item-card">
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="Burger">
                    <div class="card-body">
                        <h5 class="card-title">Classic Burger</h5>
                        <p class="card-text text-danger fw-bold">Rs. 599</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="item-card">
                    <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="Pizza">
                    <div class="card-body">
                        <h5 class="card-title">Chicken Pizza</h5>
                        <p class="card-text text-danger fw-bold">Rs. 1299</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="item-card">
                    <img src="https://images.unsplash.com/photo-1626804475294-32420841265b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="Biryani">
                    <div class="card-body">
                        <h5 class="card-title">Chicken Biryani</h5>
                        <p class="card-text text-danger fw-bold">Rs. 399</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-6">
                <div class="item-card">
                    <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="Ice Cream">
                    <div class="card-body">
                        <h5 class="card-title">Chocolate Ice Cream</h5>
                        <p class="card-text text-danger fw-bold">Rs. 299</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    items.slice(0, 4).forEach(item => {
        container.innerHTML += `
            <div class="col-md-3 col-6">
                <div class="item-card">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text text-danger fw-bold">Rs. ${item.price}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#E21B70';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.backgroundColor = '#E21B70';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .category-card, .step-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.feature-card, .category-card, .step-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displayCategories();
    displayFeaturedItems();
    
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});