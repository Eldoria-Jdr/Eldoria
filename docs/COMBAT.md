# Système de Combat Eldoria

## Overview

Le système de combat d'Eldoria est basé sur:
- **Tours** : Combat au tour par tour
- **Temps réel** : Synchronisation en temps réel avec Socket.io
- **Stats** : Calculs basés sur les statistiques des personnages

## Mécanique

### Initiative
L'initiative est calculée basée sur la Dextérité + un D20 aléatoire.

### Actions par tour
Chaque personnage peut effectuer une action par tour:
- **Attaque simple** : Basée sur la Force/Dextérité
- **Sort/Compétence** : Consomme du mana
- **Défense** : Augmente la défense pour ce tour
- **Objet** : Utiliser un objet de l'inventaire

### Calcul des dégâts
```
Dégâts = (Force + Bonus arme) * Multiplicateur skill - (Armure adversaire / 2)
```

### Fin du combat
Le combat se termine quand:
- Tous les ennemis sont vaincus (victoire)
- Tous les personnages sont vaincus (défaite)
- Les joueurs se rendent

## Combats multijoueurs

Pour les combats avec plusieurs joueurs:
- Chaque joueur a son propre tour
- Les ennemis partagent des tours collectifs
- Les effets sont synchronisés via Socket.io
