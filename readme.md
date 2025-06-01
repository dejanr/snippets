# Snippets

## Requirements

This project uses [Nix](https://nixos.org/) and [Devenv](https://devenv.sh/) for reproducible development environments:

### Nix

```bash
sh <(curl -L https://nixos.org/nix/install) --daemon
```

### Devenv

```bash
nix-env -iA nixpkgs.devenv
```

Or depending on your setup you might install devenv globally with home-manager or other setups.

### Direnv (Optional)

Additionally direnv is recommended for automatic shell activation.
