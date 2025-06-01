{ pkgs, lib, config, inputs, ... }:

{
  env.MONGODB_URI = "mongodb://127.0.0.1:27017/snippets";

  packages = [ pkgs.mongosh ];

  languages.javascript.enable = true;
  languages.javascript.pnpm.enable = true;
  languages.typescript.enable = true;

  services.mongodb.enable = true;
  services.mongodb.additionalArgs = [
    "--port"
    "27017"
    "--noauth"
  ];

  processes = {
    backend.exec = "cd backend && pnpm run dev";
    frontend.exec = "cd frontend && pnpm run dev";
  };

  enterShell = ''
  '';

  enterTest = ''
    vitest --run backend
    vitest -c frontend/vitest.config.ts --run
  '';
}
