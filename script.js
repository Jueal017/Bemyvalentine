// --- Event listener for the 'Yes' button ---
document.getElementById("yesBtn").addEventListener("click", function () {
    window.location.href = "valentine.html";
});


// --- Logic for the moving 'No' button ---
const noBtn = document.getElementById("noBtn");
const noBtnContainer = document.querySelector(".no-btn-container");

// A flag to check if it's the first time the button is hovered over
let isFirstMove = true;

noBtn.addEventListener("mouseover", function () {
    // This block runs only on the very first hover to set things up
    if (isFirstMove) {
        // Get the button's current size and position
        const rect = noBtn.getBoundingClientRect();
        
        // Set the container's width and height to match the button's.
        // This is the key step to prevent the "Yes" button from moving.
        noBtnContainer.style.width = `${rect.width}px`;
        noBtnContainer.style.height = `${rect.height}px`;

        // Now, make the button 'fixed' to move anywhere on screen
        noBtn.style.position = 'fixed';
        
        // Place it exactly where it was to make the change invisible
        noBtn.style.top = `${rect.top}px`;
        noBtn.style.left = `${rect.left}px`;
        
        // Update the flag so this setup code doesn't run again
        isFirstMove = false;
    }

    // This block runs on every hover to move the button
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Calculate a new random position
    const randomLeft = Math.floor(Math.random() * (viewportWidth - buttonWidth));
    const randomTop = Math.floor(Math.random() * (viewportHeight - buttonHeight));

    // Apply the new position. The CSS transition will handle the smooth movement.
    noBtn.style.left = randomLeft + 'px';
    noBtn.style.top = randomTop + 'px';
});
