import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/modules/**/*.{ts,mts}'],
    environment: 'node',
  },
  resolve: {
    alias: {
      '@main': resolve(__dirname, './src/main.ts'),
      '@db': resolve(__dirname, './src/db/index.ts'),
    },
  },
});