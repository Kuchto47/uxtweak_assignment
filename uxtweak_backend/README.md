# UXTweak Backend

## Tech Stack
- **Framework:** [NestJS](https://nestjs.com/)
- **API:** [tRPC](https://trpc.io/) (via [nestjs-trpc](https://github.com/jmcdo29/nestjs-trpc))
- **API UI:** [trpc-ui](https://github.com/vbudovski/trpc-ui)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [TypeORM](https://typeorm.io/)
- **Validation:** [Zod](https://zod.dev/)

## Local Development / Run

### Prerequisites
Before running the application, create a local `.env` file based on the template:
```bash
cp .env.template .env
```

### Docker Setup
The project is dockerized for easy local development. Running the following command will set up the NestJS application and the PostgreSQL database:
```bash
docker compose up
```

- **Backend API:** `http://localhost:3030`
- **tRPC Panel:** `http://localhost:3030/panel`
- **PostgreSQL DB:** `localhost:15432`

### Database Migrations
Migrations are managed via TypeORM and run automatically on `docker compose up`.
To run them manually:
```bash
npm run migration:run
```
To create a new migration:
```bash
npm run migration:create -- src/migrations/DesiredMigrationName
```

### tRPC Type Generation
The project uses automated type generation for tRPC to ensure type safety between the backend and a frontend.
**Needs to be run by dev manually right now**
```bash
npm run trpc:generate:types
```

## Additional Scripts
- `npm run start:dev`: Start the application in development mode locally.
- `npm run lint`: Run ESLint to check for code style issues.
- `npm run test`: Run unit tests. (atm none)
