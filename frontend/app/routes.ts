import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("/snippets/:id", "routes/snippet.tsx"),
] satisfies RouteConfig;
