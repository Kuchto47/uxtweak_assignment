import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true, // lets you use describe/it/expect without importing them
    include: ['src/**/*.spec.{js,ts}', 'src/**/__tests__/**/*.spec.{js,ts}'],
    setupFiles: ['vitest.setup.ts'],
  },
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      app: fileURLToPath(new URL('.', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      layouts: fileURLToPath(new URL('./src/layouts', import.meta.url)),
      pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
      boot: fileURLToPath(new URL('./src/boot', import.meta.url)),
    },
  },
});
