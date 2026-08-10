# Projets open-source Alsacréations

Page vitrine listant les outils, librairies et expériences pour intégrateurs et
intégratrices, publiés librement sur GitHub ou utilisables gratuitement en ligne
par [Alsacréations](https://www.alsacreations.com).

Site statique, sans dépendance ni étape de build : du HTML et du CSS.

## Structure

```text
.
├── index.html      # Page unique listant tous les projets
├── css/
│   ├── reset.css   # Reset CSS (layer `reset`)
│   ├── theme.css   # Polices et variables CSS (layer `theme`)
│   ├── layouts.css # Primitives de mise en page, data-layout (layer `layouts`)
│   └── styles.css  # Styles du site : header, cartes, footer… (layer `components`)
├── fonts/          # Polices web
└── img/            # Logos et captures d'écran des projets
```

Les quatre feuilles de style sont organisées en [cascade layers](https://developer.mozilla.org/fr/docs/Web/CSS/@layer)
(`reset, theme, layouts, components`, déclarés dans `css/reset.css`) : l'ordre
de chargement des `<link>` n'a donc pas d'incidence sur la cascade, seul
l'ordre des layers compte.

## Ajouter un projet

Chaque projet est une carte `<li class="card">` dans la grille
`.projects-grid` de [index.html](index.html). Pour en ajouter un, dupliquez une
carte existante et adaptez :

- la classe de catégorie : `card--code`, `card--design`, `card--jeux` ou
  `card--divers` (correspond à la légende) ;
- le titre `.card__title` et le tag `.card__tag` ;
- la description `.card__desc` ;
- l'image `.card__image img` (ajoutez la capture dans `img/`) ;
- les liens `.card__actions` (site web et/ou repo GitHub).

Pour un projet privé, n'affichez que le bouton « site web » et omettez le lien
vers le repo.

## Développement

Aucune installation requise. Ouvrez [index.html](index.html) dans un navigateur,
ou servez le dossier avec un serveur statique :

```bash
npm install -g serve
serve .
```

## Déploiement

Le site est hébergé via GitHub Pages (branche `main`).
