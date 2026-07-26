import { createTRPCClient, splitLink, httpBatchLink, httpSubscriptionLink } from '@trpc/client';
import { type AppRouter } from '../../../uxtweak_backend/src/trpc/@generated/types';

const BASE_API_URL = import.meta.env.VITE_API_URL;

if (!BASE_API_URL) {
  throw new Error('Missing env VITE_API_URL');
}

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => op.type === 'subscription',
      true: httpSubscriptionLink({
        url: `${BASE_API_URL}/trpc`,
      }),
      false: httpBatchLink({
        url: `${BASE_API_URL}/trpc`,
      }),
    }),
  ],
});
