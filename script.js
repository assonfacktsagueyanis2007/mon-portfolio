// Un message simple dans la console quand la page se charge
console.log("Bienvenue sur mon portfolio !");

// Exemple : Changer la couleur du titre au clic
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = this.style.color === 'red' ? '#35424a' : 'red';
});