// Défilement doux
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Gestion des commandes
const orderForm = document.getElementById('order-form');
const ordersTable = document.querySelector('#orders-table tbody');
const confirmationMessage = document.getElementById('confirmation-message');
const adminSection = document.getElementById('admin');

// Mode jour/nuit
const modeToggle = document.getElementById('mode-toggle');
const icon = document.getElementById('icon');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night');
  icon.textContent = document.body.classList.contains('night') ? '🌜' : '🌞';
});

// Validation formulaire
orderForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const commande = document.getElementById('commande').value;
  const quantite = parseInt(document.getElementById('quantite').value, 10);
  const paiement = document.getElementById('mode-paiement').value;

  const prix = commande === 'choco-banane' ? 2.5 : commande === 'sucre-citron' ? 2.0 : 3.5;
  const total = (prix * quantite).toFixed(2);

  const row = document.createElement('tr');
  row.innerHTML = `<td>${nom}</td><td>${prenom}</td><td>${commande}</td><td>${quantite}</td><td>${total}</td><td>${paiement}</td>`;
  ordersTable.appendChild(row);

  confirmationMessage.classList.remove('hidden');
  setTimeout(() => confirmationMessage.classList.add('hidden'), 3000);

  orderForm.reset();
});

// Accès admin
document.addEventListener('keydown', function (e) {
  if (e.key === 'a') {
    const password = prompt('Entrez le mot de passe admin :');
    if (password === 'admin123') {
      adminSection.classList.remove('hidden');
    }
  }
});
