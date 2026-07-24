# Eldoria - JDR Fantasy Interactif

Bienvenue dans **Eldoria**, un JDR fantasy immersif avec gestion de campagne, combats en temps réel et système multijoueurs complet.

## 🎮 Fonctionnalités

- **Création de personnages** : Sélection de fiches personnage et de classes
- **Combat en temps réel** : Système tour par tour basé sur les stats
- **Gestion d'inventaire** : Objets, équipements, compétences
- **Campagnes multijoueurs** : Monde ouvert avec Maître de Jeu
- **Sauvegarde de progression** : Base de données PostgreSQL
- **Communication temps réel** : WebSocket via Socket.io

## 🛠️ Tech Stack

- **Frontend** : React 18 + TypeScript + Tailwind CSS + Redux
- **Backend** : Node.js + Express + TypeScript
- **Base de données** : PostgreSQL + Prisma ORM
- **Temps réel** : Socket.io
- **Authentification** : JWT

## 📁 Structure du Projet

```
eldoria/
├── frontend/           # Application React
├── backend/            # Serveur Node.js + Express
├── prisma/             # Configuration ORM
└── docs/               # Documentation
```

## 🚀 Installation rapide

### Prérequis
- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

### Démarrage

1. **Cloner le dépôt**
```bash
git clone https://github.com/Eldoria-Jdr/eldoria.git
cd eldoria
```

2. **Installation du backend**
```bash
cd backend
npm install
```

3. **Installation du frontend**
```bash
cd ../frontend
npm install
```

4. **Configuration PostgreSQL**
```bash
# Créer une base de données
createdb eldoria_db

# Migrer le schéma
cd ../backend
npx prisma migrate dev
```

5. **Démarrer les serveurs**

Backend (terminal 1) :
```bash
cd backend
npm run dev
```

Frontend (terminal 2) :
```bash
cd frontend
npm run dev
```

Le site sera accessible à `http://localhost:5173`

## 📚 Documentation

- [Guide du backend](./backend/README.md)
- [Guide du frontend](./frontend/README.md)
- [Guide des API](./docs/API.md)
- [Système de combat](./docs/COMBAT.md)

## 👥 Contribution

N'hésitez pas à améliorer le projet et ajouter vos propres fonctionnalités !

## 📝 License

MIT

---

**Bon jeu à tous ! 🎲**