import { NextPage } from "next";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout title="Next.js + Tailwind CSS Template">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Welcome to your Next.js + Tailwind CSS Template
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              This is a starter template for building modern web applications
              with Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="mt-5 flex flex-col items-center">
            <div className="text-center">
              <p className="text-2xl font-bold">{count}</p>
              <p className="text-gray-500 mb-4">
                Click the buttons to update the counter
              </p>
            </div>

            <div className="flex space-x-3">
              <Button variant="primary" onClick={() => setCount(count + 1)}>
                Increment
              </Button>

              <Button variant="secondary" onClick={() => setCount(count - 1)}>
                Decrement
              </Button>

              <Button variant="danger" onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Features
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <ul className="list-disc pl-5 space-y-1">
              <li>Next.js for page routing and SSR/SSG</li>
              <li>Tailwind CSS for styling</li>
              <li>TypeScript for type safety</li>
              <li>ESLint and Prettier for code quality</li>
              <li>Jest and React Testing Library for testing</li>
              <li>Husky and lint-staged for git hooks</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
