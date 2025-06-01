import type { Route } from "./+types/index";
import { redirect } from "react-router";
import { HomePage } from '../pages/home';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Snippets" },
    { name: "description", content: "Welcome to Snippets!" },
  ];
}

export async function action({
  request,
}: Route.ActionArgs) {
  let formData = await request.formData();
  let text = formData.get("text");

  if (!text || typeof text !== "string") {
    throw new Error("Text is required");
  }

  const apiUrl = process.env.API_URL || "http://localhost:3001";

  try {
    const response = await fetch(`${apiUrl}/snippets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to create snippet');
    }

    const snippet = await response.json();

    return redirect(`/snippets/${snippet.id}`);
  } catch (error) {
    console.error("Error creating snippet:", error);
    throw error;
  }
}

export default function HomeRoute() {
  return <HomePage />;
}
