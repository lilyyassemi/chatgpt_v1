// Simple audio loader for demo buttons
function loadDemo(fileName) {
    const source = document.getElementById("audioSource");
    const player = document.getElementById("audioPlayer");

    source.src = "audio/" + fileName;
    player.load();
    player.play();
}
