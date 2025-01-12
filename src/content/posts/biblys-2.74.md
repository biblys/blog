---
title: Biblys 2.74
date: 2023-11-01T09:00:00Z
author:
  name: Clément Latzarus
  picture: /assets/blog/authors/clement-latzarus.jpeg
published: true
---

Biblys 2.74 est disponible aujourd'hui.

## Améliorations

- Il est désormais possible d'afficher sur la page panier une jauge
  encourageant le client à atteindre un certain montant pour bénéficier de
  la gratuité des frais de port. Le montant cible se configure à l'aide de
  l'option de configuration `free_shipping_target_amount`.
- Les paiements par virement sont désormais affichés sur la page récapitulative
  des commandes.
- Le champ permettant d'indiquer la raison de suppression d'un article a été
  rétiré.

## Corrections

- L'ajout d'un nouvel administrateur déclenchait une erreur même si
  l'adresse email utilisée correspondait bien à un compte utilisateur. C'est
  corrigé.
- L'ajout d'un fichier téléchargeable à un article ne fonctionnait plus et
  échouait sans erreurs. C'est corrigé.
- Lorsqu'un client ajoutait des articles à une commande, le courriel de
  confirmation n'incluait pas les nouveaux articles. C'est maintenant le cas.
