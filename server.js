const express = require('express');
const compression = require('compression'); // Ajoute le module de compression
const path = require('path');

const app = express();

// Active la compression Gzip pour toutes les réponses
app.use(compression());

// Sert les fichiers statiques depuis le répertoire courant
app.use(express.static(path.join(__dirname)));

// Route pour la page d'accueil (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Renvoie index.html dans le répertoire principal
});

// Démarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
