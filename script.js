
// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Function to display products on the website
function displayProducts(products) {
  const productListElement = document.querySelector('div.product-list');
  
  // Clear previous products
  productListElement.innerHTML = '';

  
  // Iterate through products and create HTML elements to display them
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    
    const productName = document.createElement('h2');
    productName.textContent = product.name;
    
    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: ${product.price}`;
    
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    const productImage=document.createElement('img')
    productImage.src=product.image


    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(productDescription);
    productItem.appendChild(productImage);
    productListElement.appendChild(productItem);
  });
}

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // prevent the form from submitting normally

    // Get form values
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    
    // log the values to the console
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Password: " + password);

})

// Function to initialize the application
async function init() {
  try {
    const products = await fetchData();
    displayProducts(products);
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}

// Call the init function when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);



    
    
       
    
  