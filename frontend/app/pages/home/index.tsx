import { SnippetForm } from "../../components/SnippetForm";

export function Home() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <main>
        <div className="space-y-4">
          <SnippetForm />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">Snippets</h1>
        </div>
      </main>
    </div>
  );
}
