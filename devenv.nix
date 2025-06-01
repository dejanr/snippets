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

  enterShell = ''
  '';

  enterTest = ''
  '';
}
