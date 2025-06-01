{ pkgs, lib, config, inputs, ... }:

{
  env.NIXPKGS_ALLOW_UNFREE = 1;

  packages = [ ];

  languages.javascript.enable = true;
  languages.javascript.pnpm.enable = true;
  languages.typescript.enable = true;

  services.mongodb.enable = true;

  enterShell = ''
  '';

  enterTest = ''
  '';
}
