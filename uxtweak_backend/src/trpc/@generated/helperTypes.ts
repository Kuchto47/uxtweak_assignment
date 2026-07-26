import { inferRouterOutputs } from '@trpc/server';
import { AppRouter } from './types';

export type RouterOutput = inferRouterOutputs<AppRouter>;
