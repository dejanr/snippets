import { SnippetForm } from "../../components/SnippetForm";
import { useSubmit } from "react-router";

export function HomePage() {
  const submit = useSubmit();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <main>
        <div className="space-y-4">
          <SnippetForm onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}
