import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      '@typescript-eslint': typescriptEslintPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Import rules
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': ['error', { noUselessIndex: true }],

      // React rules
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'react/jsx-key': 'error',
      'react/prop-types': 'off',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',

      // Prettier
      'prettier/prettier': 'error',
    },
  },
  ...compat.extends('plugin:prettier/recommended'),
  prettierConfig,
];
