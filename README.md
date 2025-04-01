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

## Requirements

- Node.js 18+ and npm

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
