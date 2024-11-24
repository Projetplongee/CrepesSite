// 1. Intégration PayPal - Création du bouton
paypal.Buttons({
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: "10.00" // Remplacez par le montant souhaité (ou lié au formulaire)
        },
        description: "Commande de crêpes Lycée Queneau"
      }]
    });
  },
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      alert("Paiement effectué avec succès par " + details.payer.name.given_name);
    });
  },
  onError: function (err) {
    console.error("Erreur lors du paiement :", err);
    alert("Une erreur est survenue lors du paiement. Veuillez réessayer.");
  }
}).render('#paypal-button'); // Ajoutez ce bouton dans l'HTML avec un div ayant cet ID

// 2. Validation du formulaire avant soumission
document.querySelector("form").addEventListener("submit", function (event) {
  const nom = document.getElementById("nom").value;
  const commande = document.getElementById("commande").value;
  const quantite = document.getElementById("quantite").value;

  if (!nom || !commande || quantite <= 0) {
    alert("Veuillez remplir tous les champs correctement avant de commander.");
    event.preventDefault(); // Empêche l'envoi du formulaire
  }
});

// 3. Animation des boutons (Effet au survol)
const buttons = document.querySelectorAll("nav a, form button");
buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    button.style.transition = "transform 0.2s";
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});

// 4. Défilement doux vers les sections
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1); // Récupère l'ID de la section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 5. Effet de zoom sur les images (au survol)
const images = document.querySelectorAll("img");
images.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s";
    image.style.border = "2px solid #FFD700"; // Ajoute une bordure dorée
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
    image.style.border = "none";
  });
});

// 6. Afficher une confirmation après l'envoi du formulaire
document.querySelector("form").addEventListener("submit", function (event) {
  const confirmation = confirm("Êtes-vous sûr(e) de vouloir passer cette commande ?");
  if (!confirmation) {
    event.preventDefault(); // Annule l'envoi si l'utilisateur clique sur "Annuler"
  }
});
