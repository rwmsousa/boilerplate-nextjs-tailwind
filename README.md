# Next.js + Tailwind CSS Template

A modern frontend template using Next.js and Tailwind CSS.

## Features

- **Next.js**: React framework with SSR and file-based routing
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety for your JavaScript
- **ESLint & Prettier**: Code quality and formatting
- **Vitest**: Fast and lightweight testing framework
- **Husky & lint-staged**: Git hooks for code quality
- **Commitizen**: Standardized commit messages
- **Docker**: Containerization for consistent development and deployment
- **Makefile**: Simplified Docker commands

## Requirements

- Node.js 18+ and npm
- Docker (for containerized development/deployment)
- Make utility (pre-installed on Linux/Mac, available via chocolatey/scoop on Windows)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/nextjs-tailwind-template.git
cd nextjs-tailwind-template
```

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Access the app at: http://localhost:3000

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Docker Support

This project includes Docker support for easy development and deployment.

### Using Docker directly

```bash
# Build the Docker image
docker build -t nextjs-app .

# Run the container
docker run -p 3000:3000 nextjs-app
```

### Using Makefile commands

A Makefile is provided to simplify Docker operations:

```bash
# Build the Docker image
make build

# Run in development mode with volume mounts for hot reloading
make dev

# Run in production mode
make prod

# Stop the running container
make stop

# Remove the container
make rm

# Stop and remove the container
make clean

# Show container logs
make logs

# Enter the container shell
make shell

# Build and run in production mode
make up

# Stop, remove, rebuild and run in production mode
make restart

# Show help with all available commands
make help
```

## Project Structure

```
project/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages
│   │   ├── _app.tsx    # Main App component
│   │   ├── index.tsx   # Home page
│   ├── styles/         # Global styles and Tailwind CSS
│   ├── utils/          # Utility functions
│   ├── tests/          # Test files
├── public/             # Static files
├── .husky/             # Git hooks
├── Dockerfile          # Docker configuration
├── Makefile            # Make commands for Docker
└── [config files]      # Configuration files
```

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Run StyleLint for CSS
npm run lint:style

# Fix StyleLint issues
npm run lint:style:fix
```

## Standardized Commits

This project uses Commitizen to standardize commit messages:

```bash
# Use this command instead of git commit
npm run commit
```

## Git Hooks with Husky and lint-staged

The project is configured with:

- **pre-commit**: Runs lint-staged to check and fix linting issues only on modified files
- **commit-msg**: Verifies that the commit message follows the conventional pattern
- **pre-push**: Runs tests before pushing to the remote repository

## License

MIT
