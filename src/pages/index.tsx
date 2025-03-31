import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHello() {
      try {
        const response = await fetch("/api/hello");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setMessage("Erro ao carregar mensagem");
      } finally {
        setLoading(false);
      }
    }

    fetchHello();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teste da API</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="p-4 border rounded bg-gray-100">
          <p>Mensagem da API: {message}</p>
        </div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => (window.location.href = "/api/hello")}
      >
        Acessar API diretamente
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // You can fetch data from your API here
  return {
    props: {
      message: "This is a server-side rendered page with Next.js and NestJS",
    },
  };
};
