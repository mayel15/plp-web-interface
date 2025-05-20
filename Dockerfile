# Étape de construction
FROM node:18-alpine AS builder
WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json package-lock.json* ./
RUN npm ci

# Copie du reste des fichiers
COPY . .

# Construction de l'application
RUN npm run build

# Étape de production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Ajout d'un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers nécessaires depuis l'étape de construction
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Définition des permissions
USER nextjs

# Exposition du port
EXPOSE 3000

# Commande de démarrage
CMD ["node", "server.js"]
