// Example JavaScript to handle form submissions or other interactions
// You can add more functionality here as needed

const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add logic here to validate form data or send the data to a server using AJAX

    // Display a success message or handle errors
    alert(`Thank you, ${name}! Your message has been sent.`);
});
console.log("edzsfcr");