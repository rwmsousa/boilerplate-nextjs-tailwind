import { FC } from 'react';
import { GetServerSideProps } from 'next';

interface HomeProps {
  message: string;
}

const Home: FC<HomeProps> = ({ message }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Next.js + NestJS!</span>
        </h1>
        <p className="mt-3 text-2xl">
          {message}
        </p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // You can fetch data from your API here
  return {
    props: {
      message: 'This is a server-side rendered page with Next.js and NestJS',
    },
  };
};

export default Home;