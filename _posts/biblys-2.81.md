---
title: Biblys 2.81
date: 2024-05-10T10:00:00+0200
author:
  name: Clément Latzarus
  picture: /assets/blog/authors/clement-latzarus.jpeg
published: true
---

## Utilisateurs locaux

- Les utilisateurs sont désormais importés depuis le fournisseur d'identité
  à la première connexion et enregistrées localement.
- Les échanges avec le fournisseur d'identité Axys se font désormais
  uniquement via le protocole OpenID Connect et sont conditionnés au
  consentement de l'utilisateur.

## Autres améliorations

- Une option de site `order_mail_subject_prefix` a été ajoutée. Elle permet
  d'ajouter un préfixe au sujet des courriels de confirmation de commande.
  Par exemple, si le préfixe est "YS |", le sujet du courriel sera "YS |
  Commande n°".

## Corrections

- Les erreurs survenant lors de la gestion d'une commande dans
  l'administration pouvaient ne pas s'afficher correctement. C'est corrigé.
