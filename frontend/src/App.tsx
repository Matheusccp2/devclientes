import { FiTrash } from "react-icons/fi";
import { api } from "./services/api";
import { useEffect, useState } from "react";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

export default function App() {
  async function loadCustomers() {
    const response = await api.get("/customers");
    setCustomers(response.data);
  }

  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>

        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo..."
            className="w-full mb-5 p-2 rounded bg-white"
          />

          <label className="font-medium text-white">Email:</label>
          <input
            type="email"
            placeholder="Digite seu email..."
            className="w-full mb-5 p-2 rounded bg-white"
          />

          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />
        </form>

        <section className="flex flex-col gap-4">
          {customers.map((customers) => (
            <article
              key={customers.id}
              className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
            >
              <p className="">
                <span className="font-medium">Nome:</span> {customers.name}
              </p>
              <p className="">
                <span className="font-medium">Email:</span> {customers.email}
              </p>
              <p className="">
                <span className="font-medium">Status:</span>{" "}
                {customers.status ? "ATIVO" : "INATIVO"}
              </p>

              <button className="bg-red-500 w-7 h-7 rounded-lg flex items-center justify-center absolute right-0 -top-2">
                <FiTrash size={18} color="#FFF" />
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
