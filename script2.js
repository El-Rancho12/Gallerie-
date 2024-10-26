// Liste des œuvres avec leurs chemins d'images
const artworks = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg"
];

let currentArtworkIndex = 0; // Index de l'œuvre actuelle
const artworkDisplay = document.getElementById("artwork-display"); // Élément image d'affichage de l'œuvre
const backgroundMusic = document.getElementById("background-music"); // Élément audio pour la musique d'ambiance

// Fonction pour mettre à jour l'œuvre affichée
function updateArtwork() {
    artworkDisplay.src = artworks[currentArtworkIndex];
}

// Événement pour passer à l'œuvre suivante
document.getElementById("next-btn").addEventListener("click", () => {
    currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
    updateArtwork();
});

// Événement pour revenir à l'œuvre précédente
document.getElementById("prev-btn").addEventListener("click", () => {
    currentArtworkIndex = (currentArtworkIndex - 1 + artworks.length) % artworks.length;
    updateArtwork();
});

// Mode plein écran pour l'affichage de l'œuvre
document.getElementById("fullscreen-btn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
        artworkDisplay.requestFullscreen(); // Activer le plein écran
    } else {
        document.exitFullscreen(); // Quitter le plein écran
    }
});

// Démarrer la musique d'ambiance lorsque l'utilisateur clique sur le bouton
document.getElementById("play-music-btn").addEventListener("click", () => {
    backgroundMusic.volume = 0.5; // Volume de la musique d'ambiance
    backgroundMusic.play();
});
