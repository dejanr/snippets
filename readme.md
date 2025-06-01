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

### Local Development

To run snippets locally we have few dependencies that are managed by devenv like mongodb, backend and frontend.

Start all services including backend and frontend:

```bash
devenv up
```

This will start:
- MongoDB service on port 27017
- Backend API server (automatically runs `pnpm run dev` in backend folder)
- Frontend development server (automatically runs `pnpm run dev` in frontend folder)

The processes will run concurrently, and you can see their logs in the terminal.

### Docker Images

Build Docker images for production deployment:

```bash
# Build backend image
devenv build outputs.backend-image
docker load < $(devenv build outputs.backend-image)

# Build frontend image  
devenv build outputs.frontend-image
docker load < $(devenv build outputs.frontend-image)
```

This creates optimized Docker images using Nix that include Node.js, pnpm, and the application code.


## Todo & Reflections

- Improve docker images build, not all files are added and docker images are not configured properly
