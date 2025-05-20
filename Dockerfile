# Utilise Node.js comme image de base
FROM node:18

# Crée le répertoire de travail
WORKDIR /app

# Copie les fichiers du projet
COPY . .

# Installe les dépendances
RUN npm install -f

# Build l’application Next.js
RUN npm run build

# Expose le port utilisé par Next.js
EXPOSE 3000

# Démarre l’application
CMD ["npm", "start"]
