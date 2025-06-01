{ pkgs, lib, config, inputs, ... }:

{
  env.MONGODB_URI = "mongodb://127.0.0.1:27017/snippets";

  outputs = {
    backend-image = pkgs.dockerTools.buildLayeredImage {
      name = "snippets-backend";
      tag = "latest";
      contents = [ pkgs.nodejs_20 pkgs.pnpm ];
      config = {
        Cmd = [ "pnpm" "start" ];
        WorkingDir = "/app";
        ExposedPorts."3000/tcp" = {};
        Env = [ "NODE_ENV=production" ];
      };
    };

    frontend-image = pkgs.dockerTools.buildLayeredImage {
      name = "snippets-frontend";
      tag = "latest";
      contents = [ pkgs.nodejs_20 pkgs.pnpm ];
      config = {
        Cmd = [ "pnpm" "start" ];
        WorkingDir = "/app";
        ExposedPorts."3000/tcp" = {};
        Env = [ "NODE_ENV=production" ];
      };
    };
  };

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
