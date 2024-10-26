// Variables globales
let cart = [];
let totalPrice = 0;

// Fonction pour ajouter une œuvre au panier
function addToCart(artworkTitle, artistName, style, price) {
    const artwork = {
        title: artworkTitle,
        artist: artistName,
        style: style,
        price: price
    };
    
    cart.push(artwork);
    updateCartUI();
    alert(artworkTitle + " a été ajouté au panier.");
}

// Mettre à jour l'interface du panier
function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    cartList.innerHTML = ''; // Réinitialiser la liste du panier

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} par ${item.artist} (${item.style}) - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    totalDisplay.textContent = totalPrice.toFixed(2);
}

// Envoi des données du panier à WhatsApp
function sendToWhatsApp() {
    const phoneNumber = "+50942624458"; // Numéro de téléphone pour recevoir les commandes
    let message = "Nouvelle commande d'œuvres :%0A";

    cart.forEach(item => {
        message += `- ${item.title} par ${item.artist} (${item.style}) - $${item.price.toFixed(2)}%0A`;
    });

    message += `%0APrix total : $${totalPrice.toFixed(2)}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Fonctionnalité de suppression du panier
function clearCart() {
    cart = [];
    updateCartUI();
    alert("Panier vidé.");
}

// Gestion des événements pour le bouton de confirmation d'achat
document.getElementById('confirm-purchase').addEventListener('click', function() {
    if (cart.length > 0) {
        sendToWhatsApp();
    } else {
        alert("Votre panier est vide.");
    }
});

// Gestion du bouton de suppression du panier
document.getElementById('clear-cart').addEventListener('click', function() {
    clearCart();
});








