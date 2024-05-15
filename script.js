// Form Validation 
function validateContactForm(event) {
    event.preventDefault();
 
    let finalAlert = "Error: ";

    // Regular expressions for validation
    let nameRegex = /^[a-zA-Z\s]{1,50}$/;
    let phoneNumberRegex = /^\d{10}$/;
    let emailRegex = /^\S+@\S+\.\S+$/;
    
    let name = document.forms["contact-form"]["name"].value;
    // During valivation
    if (name === "" || !nameRegex.test(name)) {
        finalAlert += "Enter a valid name.\n";
    }

    let phoneNumber = document.forms["contact-form"]["phoneNumber"].value;
    // More validation
    if (phoneNumber === "" || !phoneNumberRegex.test(phoneNumber)) {
        finalAlert += "Enter a valid phone number (10 digits).\n";
    }
 
    let email = document.forms["contact-form"]["email"].value;
    // More validation
    if (email === "" || !emailRegex.test(email)) {
        finalAlert += "Enter a valid email.\n";
    }

    let message = document.forms["contact-form"]["message"].value;
    // More validation
    if (message === "") {
        finalAlert += "Enter a message.\n";
    }
 
    if (finalAlert === "Error: ") {
        //Submit the form if there are no errors
        document.forms["contact-form"].submit();
    } else {
        // Display all collected error messages in a single alert box. Helps users
        alert(finalAlert);
    }
}



// Fetching JSON file

//Initialize fetch to the contents of products.json.
    fetch('products.json')
    
        //Waits for the response from the server and converts it into an object using the.json method.
        //receives the parsed JSON data once the conversion is complete.
        .then(response => response.json())
        .then(data => {
            let productContainer = document.querySelector(".productContainer");


        // For each product, it creates a new div (container) to hold the product's details.
        //Then it sets up various elements (image, title,price, description and button).
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-div'); // classList.add adds a class to the element for styling purposes.

                const productImg = document.createElement('img');
                productImg.src = product.image;
                productImg.classList.add('product-image');

                const productTitle = document.createElement('h2');
                productTitle.textContent = product.title; // Sets the text content of an element.
    
                const productPrice = document.createElement('p');
                productPrice.textContent = product.price;
    
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;

                const productButton = document.createElement('button');
                productButton.textContent = product.button;
                
                //Appends a child element to the parent element.
                //Each new div is appended to the productContainer found in the html.
                productDiv.appendChild(productImg); 
                productDiv.appendChild(productTitle);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(productDescription);
                productDiv.appendChild(productButton);
                productContainer.appendChild(productDiv);
            });
        });

        
