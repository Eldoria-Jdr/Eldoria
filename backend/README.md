# Eldoria Backend

Serveur Node.js + Express pour Eldoria.

## 🛠️ Installation

```bash
npm install
```

## ⚙️ Configuration

1. Créez un fichier `.env` basé sur `.env.example`
2. Configurez votre base de données PostgreSQL
3. Lancez les migrations Prisma

```bash
npx prisma migrate dev
```

## 🚀 Démarrage

```bash
npm run dev
```

## 📚 Architecture

### Modules principaux
- **Authentication** : JWT, register, login
- **Characters** : Création, gestion des personnages
- **Combat** : Système de combat en temps réel
- **Inventory** : Gestion d'inventaire
- **Campaign** : Gestion des campagnes
- **Skills** : Système de compétences

### Base de données

Utilise Prisma ORM avec PostgreSQL.

## API Endpoints

Voir [docs/API.md](../docs/API.md) pour la liste complète.