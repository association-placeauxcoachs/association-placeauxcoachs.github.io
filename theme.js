// Jour, Nuit ou Auto, choisi dans le pied de page et retenu par ce navigateur.
// L'en-tête de chaque page applique le choix retenu avant l'affichage.
(function () {
  var racine = document.documentElement;

  function retenu() {
    try { return localStorage.getItem('theme') || 'auto'; } catch (e) { return 'auto'; }
  }

  function applique(choix) {
    if (choix === 'auto') delete racine.dataset.theme;
    else racine.dataset.theme = choix;
    document.querySelectorAll('.theme button').forEach(function (bouton) {
      bouton.setAttribute('aria-pressed', String(bouton.value === choix));
    });
  }

  document.querySelectorAll('.theme button').forEach(function (bouton) {
    bouton.addEventListener('click', function () {
      try {
        if (bouton.value === 'auto') localStorage.removeItem('theme');
        else localStorage.setItem('theme', bouton.value);
      } catch (e) {}
      applique(bouton.value);
    });
  });

  applique(retenu());
})();
