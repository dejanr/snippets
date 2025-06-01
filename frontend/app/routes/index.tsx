import type { Route } from "./+types/index";
import { Home } from '../pages/home';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Snippets" },
    { name: "description", content: "Welcome to Snippets!" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
