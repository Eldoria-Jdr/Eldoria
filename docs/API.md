# API Eldoria

## Authentification

### POST /api/auth/register
Créer un nouvel utilisateur.

### POST /api/auth/login
Connecter un utilisateur.

## Personnages

### GET /api/characters
Récupérer tous les personnages de l'utilisateur.

### POST /api/characters
Créer un nouveau personnage.

### GET /api/characters/:id
Récupérer un personnage spécifique.

### PUT /api/characters/:id
Mettre à jour un personnage.

### DELETE /api/characters/:id
Supprimer un personnage.

## Combat

### POST /api/combat/start
Démarrer un nouveau combat.

### POST /api/combat/:combatId/action
Effectuer une action en combat.

### GET /api/combat/:combatId
Récupérer l'état d'un combat.

## Inventaire

### GET /api/inventory/:characterId
Récupérer l'inventaire d'un personnage.

### POST /api/inventory/:characterId/items/:itemId
Ajouter un objet à l'inventaire.

### DELETE /api/inventory/:characterId/items/:itemId
Retirer un objet de l'inventaire.

## Campagnes

### GET /api/campaigns
Récupérer toutes les campagnes.

### POST /api/campaigns
Créer une nouvelle campagne (MJ uniquement).

### GET /api/campaigns/:id
Récupérer les détails d'une campagne.

### POST /api/campaigns/:id/encounters
Ajouter une rencontre à une campagne.
