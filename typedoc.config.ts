import { defineConfig } from 'typedoc';

export default defineConfig({
  entryPoints: ['src/index.ts'],
  out: 'docs',
  name: 'CodeCompass',
  exclude: ['**/*.test.ts', '**/__tests__/**'],
  plugin: ['typedoc-plugin-markdown'],
  cleanOutputDir: true,
  githubPages: true,
  includeVersion: true,
  categorizeByGroup: true,
  categoryOrder: [
    'Migration',
    'Rules',
    'SARIF',
    'Types',
    '*'
  ],
  navigationLinks: {
    "GitHub": "https://github.com/yourusername/code-compass",
    "NPM": "https://www.npmjs.com/package/@acme/code-compass"
  }
});