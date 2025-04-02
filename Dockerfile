# Stage 1: Dependencies and build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy configuration files
COPY package.json yarn.lock ./
COPY next.config.js tsconfig.json postcss.config.js ./
COPY tailwind.config.js ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY src ./src

# Create public directory
RUN mkdir -p public

# Copy public directory (if exists)
COPY ["public/", "./public/"]

# Environment variables for build (if exist)
RUN touch .env.production
COPY [".env.local", "./.env.production"]

# Ensure Tailwind CSS is generated during build
RUN npx tailwindcss init -p
RUN npx tailwindcss build -o ./public/styles.css

# Build application
RUN yarn build

# Stage 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy dependencies and build files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/postcss.config.js ./postcss.config.js
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000

# Command to start the application
CMD ["yarn", "start"]