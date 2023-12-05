// Contact JS code
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Construct the mailto URL
    var mailtoUrl = 'mailto:danonymous.coder@gmail.com' +
                    '?subject=' + encodeURIComponent('New Contact Form Submission') +
                    '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

    // Open the user's default email client
    window.location.href = mailtoUrl;
}

// Attach the event handler to the form
document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
