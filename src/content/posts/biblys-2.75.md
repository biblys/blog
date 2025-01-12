---
title: Biblys 2.75
date: 2023-12-05T15:00:00Z
author:
  name: Clément Latzarus
  picture: /assets/blog/authors/clement-latzarus.jpeg
published: true
---

Biblys 2.75 est disponible aujourd'hui.

Améliorations

- Deux nouvelles options `free_shipping_invite_text` et
  `free_shipping_success_text` ont été ajoutées pour personnaliser les
  textes sur le panier pour encourager les clients à atteindre le montant
  autorisant la gratuité des frais de port.
- Un utilisateur ne pouvait pas accepter une invitation de téléchargement
  si au moins l'un des articles associés était déjà dans sa bibliothèque.
  Désormais, les articles déjà présents seront ignorés et les autres seront
  ajoutés.
- Une page de documentation "Comment télécharger et lire des livres
  numériques" a été ajoutée.
- La fonctionnalité de mise à jour de Biblys via l'administration a été
  supprimée.

Corrections

- La pagination de la liste des invitations de téléchargement pouvait
  afficher un nombre de page plus important que le nombre de page réel.
  C'est corrigé.
- Le paiement via Stripe pouvait déclencher une erreur. C'est corrigé.
- Seul le premier article d'une invitation était validé au moment de
  l'acceptation de l'invitation. Désormais, ils le sont tous.
- Le paiement via Stripe pouvait déclencher une erreur. C'est corrigé.
- Seul le premier article d'une invitation était validé au moment de
  l'acceptation de l'invitation. Désormais, ils le sont tous.
- Une url d'article pouvait être considéré comme invalide si elle contenait
  le caractère "\_". C'est corrigé.
- La page "Ma liste d'envies" pouvait s'afficher vide. Ce n'est plus le cas.
