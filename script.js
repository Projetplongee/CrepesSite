// Ajout du bouton PayPal
document.getElementById("payButton").addEventListener("click", function () {
  const commande = document.getElementById("commande").value;
  const quantite = parseInt(document.getElementById("quantite").value);
  
  // Détermine le prix basé sur la commande
  const prixParCrepe = {
    "Choco-Banane": 2.5,
    "Sucre-Citron": 2.0,
    "Fromage-Jambon": 3.5,
  };

  const montantTotal = prixParCrepe[commande] * quantite;

  // Vérifie que les données sont valides
  if (quantite > 0 && montantTotal > 0) {
    paypal.Buttons({
      createOrder: function () {
        return fetch('/my-server/create-order', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            montant: montantTotal,
            description: `Commande de ${quantite} ${commande}(s)`,
          }),
        })
          .then((response) => response.json())
          .then((order) => order.id);
      },
      onApprove: function (data) {
        alert("Paiement réussi ! Merci pour votre commande.");
      },
    }).render("#commander");
  } else {
    alert("Veuillez vérifier votre commande avant de payer.");
  }
});
