import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Snippets" },
    { name: "description", content: "Welcome to Snippets!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <main className="bg-white rounded-lg shadow-md p-6 my-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Snippets</h1>
        <div className="space-y-4">
          <p className="text-gray-600">
            Welcome to code snippets.
          </p>
        </div>
      </main>
    </div>
  );
}
