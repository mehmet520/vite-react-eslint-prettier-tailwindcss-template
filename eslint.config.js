import js from '@eslint/js'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: [pluginReact, prettierPlugin],
    extends: [
      js.configs.recommended,
      pluginReact.configs.recommended,
      prettier,
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: css.parsers.css,
    },
    plugins: [css],
    extends: [css.configs.recommended],
    rules: {
      'css/use-baseline': 'off',
    },
  },
])
