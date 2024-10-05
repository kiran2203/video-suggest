// Predefined list of videos based on user input
const videos = {
    "pythogoras": "videos/pythogoras.mp4",  // Example video 1
};

document.getElementById("search-button").addEventListener("click", function () {
    const userInput = document.getElementById("search-box").value.toLowerCase();

    // Check if the input matches any predefined video
    if (videos[userInput]) {
        const videoUrl = videos[userInput];
        document.getElementById("video-player").src = videoUrl;
        document.getElementById("video-section").style.display = "block";
    } else {
        alert("No video found for your search.");
        document.getElementById("video-section").style.display = "none";
    }
});
