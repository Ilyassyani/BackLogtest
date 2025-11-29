// Identifiants valides (à titre d'exemple)
const validUsers = [
    { email: "admin@example.com", password: "admin123" },
    { email: "user@example.com", password: "user123" }
];

// Récupération du formulaire
const loginForm = document.getElementById('loginForm');

// Gestion de la soumission du formulaire
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Vérification des identifiants
    const user = validUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Connexion réussie
        alert('Connexion réussie ! Bienvenue ' + email);
        // Redirection ou autre action
        // window.location.href = 'dashboard.html';
    } else {
        // Identifiants incorrects
        alert('Email ou mot de passe incorrect !');
    }
});
