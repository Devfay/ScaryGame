const snake = document.getElementById("snake");
const container = document.getElementById("game-container");
const screamerImage = document.getElementById("screamer-image");
const gameSize = 500; // Taille du jeu

let snakePosition = { x: 240, y: 240 }; // Position initiale du serpent
let snakeDirection = { x: 0, y: 0 }; // Direction du serpent
let speed = 20; // Vitesse du serpent

// Fonction pour déplacer le serpent
function moveSnake() {
    snakePosition.x += snakeDirection.x;
    snakePosition.y += snakeDirection.y;

    // Mise à jour de la position du serpent
    snake.style.left = snakePosition.x + "px";
    snake.style.top = snakePosition.y + "px";

    // Vérification des collisions avec les bords
    if (snakePosition.x < 0 || snakePosition.x >= gameSize || snakePosition.y < 0 || snakePosition.y >= gameSize) {
        showScreamer(); // Si collision, afficher l'image effrayante
    }
}

// Fonction pour changer la direction du serpent
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            snakeDirection = { x: 0, y: -speed };
            break;
        case "ArrowDown":
            snakeDirection = { x: 0, y: speed };
            break;
        case "ArrowLeft":
            snakeDirection = { x: -speed, y: 0 };
            break;
        case "ArrowRight":
            snakeDirection = { x: speed, y: 0 };
            break;
    }
});

// Afficher l'image effrayante
function showScreamer() {
    screamerImage.style.display = "flex";
    setTimeout(() => {
        window.location.reload(); // Redémarre le jeu après le screamer
    }, 2000); // L'image reste pendant 2 secondes
}

// Déplacer le serpent toutes les 100ms
setInterval(moveSnake, 100);
