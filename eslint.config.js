import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import vitestPlugin from 'eslint-plugin-vitest';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  },
  {
    // Konfiguracija za test fajlove
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'], // Test fajlovi
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // Dodajemo Node.js globalne promenljive
      }
    },
    plugins: {
      vitest: vitestPlugin // Aktiviramo Vitest plugin
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules // Preporučena pravila za Vitest
    }
  }
];
