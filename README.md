# UXTweak Assignment

## Assignment
The goal of this task is to develop a simple real-time communication application. The solution should consist of a Quasar-based client (Vue 3, TypeScript) and a Node.js server with WebSockets for message exchange.

The application should:
- Support multiple clients exchanging text messages in real-time.
- Manage connections, distribute messages, and store history on the backend.
- Focus on clean design, modularity, and high-quality implementation rather than extensive features.
- Demonstrate proper error handling, type safety, and a clear separation of core logic from transport and storage layers.

## Frontend

All frontend details can be found in the [Frontend README](./uxtweak_frontend/README.md).

## Backend

All backend details can be found in the [Backend README](./uxtweak_backend/README.md).

## Next steps

- Upgrade to TypeScript 6 and subsequently TypeScript 7 on both projects.
- Upgrade to Zod 4 on backend (currently blocked by a tRPC subdependency).
- Implement a more sleek UI.
- Add authentication.
- Implement Chatrooms creation.
- Add chatroom share / invite buttons.
- And more...
