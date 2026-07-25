import { createTRPCClient, splitLink, httpBatchLink, httpSubscriptionLink } from '@trpc/client';
import { type AppRouter } from '../../../uxtweak_backend/src/trpc/@generated/types';

const BASE_API_URL = 'http://localhost:3030'; // TODO env this

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
