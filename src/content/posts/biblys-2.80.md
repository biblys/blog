---
title: Biblys 2.80
date: 2024-05-02T10:00:00Z
author:
  name: Clément Latzarus
  picture: /assets/blog/authors/clement-latzarus.jpeg
published: true
---

## Améliorations

- Il est désormais possible dans le panier plusieurs offres simultanées.
- Lors de l'accès à une page nécessitant d'être authentifié, l'utilisateur
  est désormais redirigé vers la page de connexion plutôt que vers une page
  d'erreur.
- Des boutons pour ajouter ou supprimer des adresses dans une liste de
  contacts ont été ajoutés.
- Un lien vers le stock des articles a été ajouté sur la page Catalogue.

## Corrections

- L'affichage d'une page de collection pouvait déclencher une erreur si
  l'option `articles_per_page` n'avait pas de valeur définie. C'est corrigé.
- L'option `articles_per_page`, qui permet de spécifier le nombre d'articles
  à afficher sur une page, n'était pas pris en compte sur les pages de
  collection. C'est corrigé.
- L'entrée de valeurs trop longues pour les codes BISAC, CLIC, Dewey et
  Electre pouvait déclencher une erreur. Une limite de 16 caratère a été
  ajoutée.
- Le lien vers la documentation des options de site a été mis à jour.
