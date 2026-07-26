# UXTweak Frontend

## Tech Stack
- **Framework:** [Quasar Framework](https://quasar.dev/) (Vue 3)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Data Fetching & State Management:** [TanStack Query (Vue Query)](https://tanstack.com/query/latest)
- **API Communication:** [tRPC](https://trpc.io/)
- **Data/Schema validation:** [Zod](https://zod.dev/)

## Environment Variables
The application requires the following environment variables to be set in a `.env` file in the `uxtweak_frontend` directory. You can use `.env.template` as a starting point.

| Variable | Description                            | Default |
| :--- |:---------------------------------------| :--- |
| `VITE_API_URL` | The base URL of the backend API (tRPC) | `http://localhost:3030` |

## Local Development / Run

### Prerequisites
Before running the application, create a local `.env` file based on the template:
```bash
cp .env.template .env
```

Install the dependencies using npm (or pnpm/yarn):
```bash
npm install
```

### Development Server
To start the application in development mode with Hot Module Replacement (HMR):
```bash
npm run dev
```

- **Frontend App:** `http://localhost:9000`
- **Requires/expects the backend app running!!!**

### Build for Production
To build the application for production:
```bash
npm run build
```

## Additional Scripts
- `npm run dev`: Start the application in development mode.
- `npm run lint`: Run ESLint and Prettier to check and fix code style issues.
- `npm run typecheck`: Run vue-tsc to check for TypeScript errors in Vue files.
- `npm run build`: Build the application for production.
