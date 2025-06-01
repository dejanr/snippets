import type { Route } from "./+types/index";
import { HomePage } from '../pages/home';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Snippets" },
    { name: "description", content: "Welcome to Snippets!" },
  ];
}

export default function HomeRoute() {
  return <HomePage />;
}
