# Snippets Frontend

# Environment Variables

Frontend depends on few Environment Variables that should be provided:

```bash
API_URL=
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Project Scripts

The following npm/pnpm scripts are available for development, building, and testing:

- **`pnpm run build`**:
  Builds the application for production deployment, creating optimized assets.

- **`pnpm run dev`**:
  Starts the development server with hot module replacement (HMR) for local development at http://localhost:5173.

- **`pnpm start`**:
  Serves the production build locally after running the build command.

- **`pnpm run typecheck`**:
  Generates TypeScript types.

- **`pnpm run test`**: 
  Runs all tests in the project.

- **`pnpm run test:update`**: 
  Runs all tests in the project and update all the snapshots
