# Next.js + Tailwind CSS Template

A modern frontend template using Next.js and Tailwind CSS.

## Features

- **Next.js**: React framework with SSR and file-based routing
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety for your JavaScript
- **ESLint & Prettier**: Code quality and formatting
- **Jest & React Testing Library**: Testing framework
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
│   ├── tests/          # Unit and integration tests
├── public/             # Static files
├── .husky/             # Git hooks
└── [config files]      # Configuration files
```

## Adding New Pages

To add a new page to the app:

1. Create a new file in the `src/pages/` folder, for example `about.tsx`:

```tsx
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p className="mt-2">This is the about page of our application.</p>
      </div>
    </Layout>
  );
};

export default About;
```

2. Access the page at `http://localhost:3000/about`

## Creating Components

Create reusable components in the `src/components/` folder:

```tsx
// src/components/Card.tsx
import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Card;
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
