# Plateforme IoT - Interface d'Administration

## Présentation

Cette application web constitue l'interface d'administration pour la plateforme IoT de gestion des hubs Raspberry Pi et des capteurs connectés. Elle permet aux administrateurs de superviser l'infrastructure, gérer les hubs et capteurs, valider les demandes d'accès et surveiller les activités du système.

<img width="1439" alt="image" src="https://github.com/user-attachments/assets/a07b4086-7503-4bda-a98a-3ee24ad4aca8" />

## Technologies utilisées

- **Next.js** (App Router) - Framework React pour le rendu côté serveur et le routage
- **React** - Bibliothèque pour construire l'interface utilisateur
- **TypeScript** - Langage de programmation avec typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Composants UI réutilisables basés sur Radix UI
- **Lucide React** - Bibliothèque d'icônes

## Fonctionnalités

### Tableau de bord

- Vue d'ensemble des indicateurs clés (hubs connectés, capteurs actifs, etc.)
- Aperçu des hubs et capteurs avec leur statut
- Liste des demandes d'accès en attente
- Journal des activités récentes

### Gestion des Hubs

- Liste des hubs Raspberry Pi avec leur statut (en ligne, hors ligne, en attente)
- Enregistrement de nouveaux hubs via leur adresse MAC
- Page de détail pour chaque hub avec:
  - Informations techniques (modèle, OS, adresse IP, etc.)
  - Statistiques d'utilisation (CPU, mémoire, stockage, réseau)
  - Liste des capteurs connectés
  - Applications déployées
  - Logs spécifiques au hub

### Gestion des Capteurs

- Liste de tous les capteurs avec filtrage
- Validation des nouveaux capteurs détectés
- Informations détaillées sur chaque capteur
- Visualisation des dernières valeurs mesurées

### Demandes d'accès

- Liste des demandes d'accès aux données des capteurs
- Interface pour approuver ou refuser les demandes
- Historique des demandes traitées

### Logs & Événements

- Journal centralisé des événements du système
- Filtrage par niveau (info, avertissement, erreur) et par source
- Export des logs pour analyse

## Installation et démarrage

### Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn

### Installation

1. Cloner le dépôt

```bash
git clone https://github.com/mayel15/plp-web-interface.git
cd plp-web-interface

2. Lancer Docker 
```bash
docker-compose up -d
