document.getElementById("yesBtn").addEventListener("click", function () {
    window.location.href = "valentine.html"; // Redirects to the new page
});

document.getElementById("noBtn").addEventListener("mouseover", function () {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;
    this.style.transform = `translate(${x}px, ${y}px)`;
});
