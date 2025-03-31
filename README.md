# NextJS + NestJS Serverless Boilerplate

A complete full-stack boilerplate combining NextJS for the frontend and NestJS with Fastify for a serverless backend.

## Overview

This boilerplate provides a ready-to-use structure for developing modern web applications with:

- **Frontend**: NextJS with SSR and Tailwind CSS
- **Backend**: NestJS with Fastify optimized for serverless
- **Infrastructure**: Configuration for AWS Lambda and Vercel
- **Code Quality**: ESLint, StyleLint, Prettier, Husky, and lint-staged
- **Testing**: Jest and React Testing Library
- **Git Workflow**: Commitizen and commitlint

## Requirements

- Node.js 18+ and npm

## Quick Start

### Clone the repository

```bash
git clone https://github.com/your-username/nextjs-nestjs-serverless-boilerplate.git
cd nextjs-nestjs-serverless-boilerplate
```

### Install dependencies

```bash
npm install
```

### Development

#### Start the NextJS development server (frontend)

```bash
npm run dev
```

Access the frontend at: http://localhost:3000

#### Start the serverless offline server (backend)

```bash
npm run serverless:offline
```

Access the backend at: http://localhost:3001/api/hello

### Production

#### Build for production

```bash
npm run build
```

#### Start the production server

```bash
npm start
```

## Project Structure

```
project/
├── src/
│   ├── client/         # NextJS client components and logic
│   ├── pages/          # NextJS pages
│   │   ├── _app.tsx    # Main App component
│   │   ├── index.tsx   # Home page
│   ├── server/         # NestJS server code
│   │   ├── app.controller.ts  # API controllers
│   │   ├── app.module.ts      # Main NestJS module
│   │   ├── app.service.ts     # NestJS services
│   │   ├── main.ts            # Server entry point
│   │   ├── serverless.ts      # AWS Lambda serverless handler
│   ├── shared/         # Shared types and utilities
│   ├── styles/         # Global styles and Tailwind CSS
│   ├── tests/          # Unit and integration tests
├── public/             # Static files
├── .husky/             # Git hooks
├── serverless.yml      # Serverless Framework configuration
├── vercel.json         # Vercel configuration
├── next.config.js      # NextJS configuration
└── tsconfig.json       # TypeScript configuration
```

## Frontend Development

### Adding New Pages

To add a new page to the frontend:

1. Create a new file in the `src/pages/` folder, for example `about.tsx`:

```tsx
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">About Us</h1>
        <p className="mt-3 text-2xl">This is the about page.</p>
      </main>
    </div>
  );
};

export default About;
```

2. Access the page at `http://localhost:3000/about`

### Modifying the Home Page

The home page is located at `src/pages/index.tsx`. You can modify the `Home` component to customize the content:

```tsx
const Home: FC<HomeProps> = ({ message }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          My Project with{" "}
          <span className="text-blue-600">Next.js + NestJS!</span>
        </h1>
        <p className="mt-3 text-2xl">{message}</p>
        {/* Add more content here */}
      </main>
    </div>
  );
};
```

### Adding Reusable Components

Create reusable components in the `src/client/components/` folder:

```tsx
// src/client/components/Button.tsx
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  const baseClasses = "px-4 py-2 rounded font-bold";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```

## Backend Development

### Adding New Endpoints

To add new endpoints to the API:

1. Modify or create a new controller in `src/server/app.controller.ts`:

```typescript
import { Controller, Get, Post, Body } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("users")
  getUsers() {
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];
  }

  @Post("message")
  createMessage(@Body() body: { text: string }) {
    return {
      received: true,
      message: body.text,
      timestamp: new Date().toISOString(),
    };
  }
}
```

2. Update the corresponding service in `src/server/app.service.ts` if needed:

```typescript
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello from NestJS with Fastify!";
  }

  // Add new service methods here
}
```

### Configuring Serverless Routes

To add new routes in serverless.yml:

```yaml
functions:
  api:
    handler: server-handler.handler
    events:
      - http:
          path: /api/{proxy+}
          method: any
          cors: true
      # Add specific routes if needed
      - http:
          path: /public-api
          method: get
          cors: true
```

## Frontend-Backend Integration

### Consuming the API in the Frontend

Use the `getServerSideProps` or `getStaticProps` hook to fetch data from the API:

```typescript
export const getServerSideProps: GetServerSideProps = async () => {
  // In development, the API is at localhost:3001
  // In production, the API is on the same domain due to the configured proxy
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api/hello"
      : "/api/hello";

  const response = await fetch(apiUrl);
  const data = await response.json();

  return {
    props: {
      message: data.message || "API Data",
    },
  };
};
```

For client-side calls, use `fetch` or libraries like Axios:

```typescript
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/api/users'
        : '/api/users';

      const response = await fetch(apiUrl);
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

## Deployment

### Deploying to Vercel

This boilerplate is configured for deployment to Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect the Next.js project
3. The `vercel.json` file is already configured to route API requests to the serverless handler

### Deploying to AWS with Serverless Framework

To deploy to AWS Lambda:

```bash
# Configure your AWS credentials
aws configure

# Deploy
npm run serverless:deploy
```

## Code Quality Tools

### Linting and Formatting

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

### Standardized Commits

This project uses Commitizen to standardize commit messages:

```bash
# Use this command instead of git commit
npm run commit
```

### Git Hooks with Husky and lint-staged

The project is configured with:

- **pre-commit**: Runs lint-staged to check and fix linting issues only on modified files
- **commit-msg**: Verifies that the commit message follows the conventional pattern
- **pre-push**: Runs tests before pushing to the remote repository

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Adding New Tests

1. Create test files with the `.test.tsx` or `.test.ts` suffix
2. Use Jest and React Testing Library to write your tests:

```typescript
// src/tests/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../client/components/Button';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## License

MIT
