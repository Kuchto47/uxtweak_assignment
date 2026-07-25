import { defineBoot } from '#q-app';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';

export default defineBoot(({ app }) => {
  const queryClient = new QueryClient();
  app.use(VueQueryPlugin, { queryClient });
});
