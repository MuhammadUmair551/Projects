
// Signup

function signUp() {
    var getName = document.querySelector("#name");
    var getEmail = document.querySelector("#email");
    var getPassword = document.querySelector("#password");

    if (getName.value == "" || getEmail.value == "" || getPassword.value == "") {
        alert("Please fill in all fields")
    } else {
        var allUsers = JSON.parse(localStorage.getItem("users")) || [];

        var user = {
            name: getName.value.trim(),
            email: getEmail.value.trim(),
            password: getPassword.value.trim()
        }
        allUsers.push(user);

        localStorage.setItem("users", JSON.stringify(allUsers));
    }
}

// Login

function login(event) {
    event.preventDefault();

    var getEmail = document.querySelector("#email");
    var getPassword = document.querySelector("#password");

    var allUsers = JSON.parse(localStorage.getItem("users")) || [];
    var filterUser = allUsers.filter(function (data) {
        return data.email === getEmail.value && data.password === getPassword.value;
    });

    if (filterUser.length === 0) {
        alert("Invalid email or password");
    } else {
        alert("Login successful");
        window.location.href = "dashboard.html";
    }
}

// createPost

function createPost() {
    const name = document.getElementById('recipient-name').value;
    const imageInput = document.getElementById('img-path');
    const caption = document.getElementById('caption-text').value;
    const price = document.getElementById('post-price').value;

    const reader = new FileReader();
    reader.onload = function (e) {
        const post = {
            name,
            image: e.target.result,
            caption,
            price,
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        loadPosts();

    };

    if (imageInput.files.length > 0) {
        reader.readAsDataURL(imageInput.files[0]);
    }
}

function loadPosts(userMode = false) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach((post, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card product-card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = post.image;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = post.name;

        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = post.caption;

        const price = document.createElement('p');
        price.innerHTML = `<strong>Price: </strong>Rs. ${post.price}`;

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(price);

        if (!userMode) {
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-sm btn-danger me-2';
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => deletePost(index);

            const editBtn = document.createElement('button');
            editBtn.className = 'btn btn-sm btn-warning';
            editBtn.textContent = 'Edit';
            editBtn.onclick = () => alert("Edit functionality not implemented yet");

            cardBody.appendChild(deleteBtn);
            cardBody.appendChild(editBtn);
        }

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        postsContainer.appendChild(col);
    });
    name = "";
    image = "";
    caption = "";
    price = "";

    var modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}


document.addEventListener('DOMContentLoaded', function () {
    const isUserPage = window.location.pathname.includes('user.html');
    loadPosts(isUserPage);
});


