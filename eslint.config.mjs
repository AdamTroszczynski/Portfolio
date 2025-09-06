// @ts-check
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vueparser from 'vue-eslint-parser';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    ignores: ['node_modules/', 'public/', 'build/', 'dist/'],
    rules: {
      'vue/html-self-closing': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    languageOptions: {
      parser: vueparser,
      parserOptions: {
        parser: tsparser,
      },
    },
    plugins: {
      '@typescript-eslint/eslint-plugin': tseslint.configs,
      'simple-import-sort': simpleImportSort,
    },
  },
);
