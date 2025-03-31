# NextJS + NestJS Serverless Project

This is a template project combining NextJS for the frontend and NestJS with Fastify for a serverless backend.

## Features

- NextJS for frontend with SSR
- NestJS with Fastify for backend
- Serverless configuration for AWS Lambda
- TypeScript support
- ESLint and StyleLint for code quality
- Husky, lint-staged, and commitlint for git hooks
- Jest for testing
- TailwindCSS for styling

## Getting Started

### Prerequisites

- Node.js 14+ and npm

### Installation
#### Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```
#### Install dependencies
```bash
npm install
```

### Development

#### Start the Next.js development server
```bash
npm run dev
```

#### Start the serverless offline server
```bash
npm run serverless:offline
```

#### Build the application
```bash
npm run build
```
#### Start the production server
```bash
npm run start
```

### Run tests

#### Run unit tests
```bash
npm run test
```

#### Run unit tests with coverage
```bash
npm run test
```
#### Run tests with coverage
```bash
npm run test:coverage
```


## Project Structure

project-root/
├── src/
│ ├── client/ # NextJS client-side code
│ ├── pages/ # NextJS pages
│ ├── server/ # NestJS server code
│ └── shared/ # Shared types and utilities
├── public/ # Static assets
└── config/ # Configuration files

## Available Scripts

- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and fix issues
- `npm run lint:style` - Run StyleLint to check CSS
- `npm run lint:style:fix` - Run StyleLint and fix issues
- `npm test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode
- `npm run test:coverage` - Run Jest with coverage report
- `npm run commit` - Use Commitizen for conventional commits
- `npm run serverless` - Run serverless commands
- `npm run serverless:offline` - Run serverless offline
- `npm run serverless:deploy` - Deploy to AWS Lambda

## Code Quality Tools

- **ESLint**: JavaScript and TypeScript linting
- **StyleLint**: CSS linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Run linters on staged files
- **commitlint**: Lint commit messages
- **Commitizen**: Interactive commit message CLI

## Testing

Jest is configured for testing React components and NestJS services. The testing setup includes:

- Jest for running tests
- React Testing Library for testing React components
- Jest DOM for DOM testing utilities

## License

MIT