// Toggle Jour/Nuit
const modeToggle = document.getElementById('mode-toggle');
const icon = document.getElementById('icon');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night');
  icon.textContent = document.body.classList.contains('night') ? '🌜' : '🌞';
});

// Défilement doux
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Gestion des commandes
document.getElementById('order-form').addEventListener('submit', e => {
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
  document.querySelector('#orders-table tbody').appendChild(row);

  document.getElementById('confirmation-message').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('confirmation-message').classList.add('hidden');
  }, 3000);
});
