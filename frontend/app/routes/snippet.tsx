import type { Route } from "./+types/snippet";
import { SnippetPage } from '../pages/snippet';
import type { Snippet } from "@snippets/shared"

type LoaderData = {
  snippet: Snippet;
};

export async function loader({ params }: Route.LoaderArgs) {
  const { id } = params;

  if (!id) {
    throw new Error("Snippet ID is required");
  }

  const apiUrl = process.env.API_URL || "http://localhost:3001";

  try {
    const response = await fetch(`${apiUrl}/snippets/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to load snippet: ${response.statusText}`);
    }

    const snippet = await response.json();

    return { snippet };
  } catch (error) {
    console.error("Error loading snippet:", error);
    throw error;
  }
}

export default function SnippetRoute({ loaderData }: { loaderData: LoaderData }) {
  const { snippet } = loaderData;

  return <SnippetPage snippet={snippet} />;
}
