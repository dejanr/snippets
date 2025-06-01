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

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm i
```

### Start

To run snippets locally we have few dependencies that are managed by devenv, like mongodb etc.

We treat those dependencies as attached resources following the 12 factor app guidance.

Start all services:

```bash
devenv up
```
