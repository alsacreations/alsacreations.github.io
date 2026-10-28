# CLAUDE.md

Page vitrine des projets open-source d'Alsacréations, publiée par GitHub Pages
depuis la branche `main`. Voir [README.md](README.md) pour la structure.

## Principes

- Site statique **sans étape de build** : les fichiers du repo sont servis tels
  quels. Ne pas introduire de bundler, de framework ni de dépendance chargée
  par la page.
- Les dépendances npm (Prettier, Stylelint) ne servent qu'au lint local. Les
  alertes de sécurité qui les concernent n'ont aucun impact sur le site en
  ligne.
- Gestionnaire de paquets : **pnpm 10 minimum** (`pnpm-workspace.yaml` utilise
  des réglages pnpm 10). Ne pas réintroduire de `package-lock.json`.

## CSS

- Quatre cascade layers déclarés dans `css/reset.css` :
  `reset, theme, layouts, components`. Tout nouveau style va dans le layer
  `components` de `css/styles.css`. Les variables (couleurs, etc.) vont dans
  `css/theme.css`.
- `css/layouts.css` est la librairie [Bretzel](https://bretzel.alsacreations.com/) :
  ne pas la modifier, utiliser ses primitives via `data-layout` (`stack`,
  `cluster`, `repel`, `autogrid`, `boxed`…) et ses attributs (`data-gap`,
  `data-align`, `data-justify`).
- Nommage BEM en kebab-case (`block__element--modifier`), pas de sélecteur
  d'ID.
- Règles Stylelint à respecter : pas de `px` pour les polices, `rem` dans les
  media queries (notation de plage `width >= 48rem`), couleurs hexadécimales en
  notation longue (`#444444`), pas de couleurs nommées, `font-weight`
  numérique, alpha et luminosité en pourcentage.

## HTML et accessibilité

- Les images de cartes sont décoratives : `alt=""` et `loading="lazy"`, au
  format **webp** uniquement.
- Le filtre ([js/filter.js](js/filter.js)) repose sur des `<button>` avec
  `aria-pressed` et sur la zone `#filter-status` (`role="status"`) : conserver
  ces attributs.
- Liens externes : `target="_blank" rel="noopener"`.

## Ajouter un projet

Dupliquer une carte `<li class="card">` dans `.projects__grid` et renseigner
la catégorie **aux deux endroits** : classe `card--<catégorie>` (couleur) et
`data-category="<catégorie>"` (filtre). Catégories : `ref`, `code`,
`performance`, `design`, `jeux`, `divers`.

Créer une nouvelle catégorie demande : un bouton `data-filter` dans la
légende, les variables `--color-<catégorie>` et `--tint-<catégorie>` dans
`css/theme.css`, et les classes `.card--<catégorie>` et
`.legend__dot--<catégorie>` dans `css/styles.css`.

## Avant de committer

- Lancer `pnpm lint` : il doit passer sans erreur (`pnpm format` et
  `pnpm lint:css:fix` corrigent l'essentiel).
- Supprimer les images qui ne sont plus référencées.
- Messages de commit en français, au format Conventional Commits
  (`feat:`, `fix:`, `chore:`, `docs:`…).
