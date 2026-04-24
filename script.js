// Select the envelope element
const envelope = document.querySelector('#envelope');

// Create a function to display the sentences
function displayMessage() {
    const message = 'hey upper east siders, gossip girl here - and I have the biggest news ever.';
    alert(message);
}

// Add a click event listener to the envelope
envelope.addEventListener('click', displayMessage);