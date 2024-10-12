document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const imageContainer = document.getElementById('imageContainer');

    revealButton.addEventListener('click', function() {
        // Toggle the visibility of the image container
        imageContainer.style.display = 'block';
        
        // Optionally, disable the button after the image is shown
        revealButton.disabled = true;
        revealButton.textContent = 'Suggested answer revealed';
    });
});
