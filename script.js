// Form Validation 
function validateContactForm() {
    event.preventDefault();
 
    let finalAlert = "Error: ";

    // Regular expressions for validation
    let nameRegex = /^[a-zA-Z\s]{1,50}$/;
    let phoneNumberRegex = /^\d{10}$/;
    let emailRegex = /^\S+@\S+\.\S+$/;
    
    let name = document.forms["contact-form"]["name"].value;
    if (name === "" || !nameRegex.test(name)) {
        finalAlert += "Enter a valid name.\n";
    }

    let phoneNumber = document.forms["contact-form"]["phoneNumber"].value;
    if (phoneNumber === "" || !phoneNumberRegex.test(phoneNumber)) {
        finalAlert += "Enter a valid phone number (10 digits).\n";
    }
 
    let email = document.forms["contact-form"]["email"].value;
    if (email === "" || !emailRegex.test(email)) {
        finalAlert += "Enter a valid email.\n";
    }

    let message = document.forms["contact-form"]["message"].value;
    if (message === "") {
        finalAlert += "Enter a message.\n";
    }
 
    if (finalAlert === "Error: ") {
        document.forms["contact-form"].submit();
    } else {
        alert(finalAlert);
    }
}



// Fetching JSON file

    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            let productContainer = document.querySelector(".productContainer");

            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-div');

                const productImg = document.createElement('img');
                productImg.src = product.image;
                productImg.classList.add('product-image');

                const productTitle = document.createElement('h2');
                productTitle.textContent = product.title;
    
                const productPrice = document.createElement('p');
                productPrice.textContent = product.price;
    
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                

                productDiv.appendChild(productImg);
                productDiv.appendChild(productTitle);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(productDescription);
                productContainer.appendChild(productDiv);
            });
        });

        
