import { SnippetPage } from '../pages/snippet';

// Define the loader data type
type LoaderData = {
  snippet: Record<string, any>;
};

export async function loader({ params }: Route.LoaderArgs) {
  const snippet = { id: '1', text: 'todo', summary: 'todo' };

  return { snippet };
}

export default function SnippetRoute({ loaderData }: { loaderData: LoaderData }) {
  const { snippet } = loaderData;

  return <SnippetPage snippet={snippet} />;
}
