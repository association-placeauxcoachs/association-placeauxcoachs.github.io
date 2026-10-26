# association.placeauxcoachs.fr

Le portail public de l'association, servi par GitHub Pages. Les dépôts [`association`](https://github.com/association-placeauxcoachs/association) et [`produit`](https://github.com/association-placeauxcoachs/produit) y sont publiés en sous-chemins : `/association/` et `/produit/`.

- `index.html` : la page d'accueil, sans outil de construction.
- `style.css` et `polices/` : la feuille commune aux trois dépôts, aux jetons et polices de l'application (Inter, Fraunces, JetBrains Mono, sous licence OFL, hébergées ici). `association` et `produit` la chargent par `/style.css` depuis leur `_layouts/default.html`, qui reprend le bandeau et le pied de page de l'accueil : une retouche de l'un se reporte dans les trois.
- `404.html` : servie pour toute adresse inconnue du portail.
- `CNAME` : le domaine personnalisé, qui vaut aussi pour les deux autres dépôts. Ils ne doivent pas déclarer de domaine à eux.

Le texte parle au nom de l'association : toute modification passe par le bureau.
