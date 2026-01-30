//JavaScript to prompt user for their name and display welcome message
welcomeMessage();

//Function to display welcome message
function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Welcome to our company website! What's your name?");

    // Handle case where user cancels or enters an empty name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message on the webpage
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Ztudio.`;
}

function submitMessage() {
}