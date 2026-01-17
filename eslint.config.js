import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      // 🔕 React 17+ (Vite) — NÃO precisa importar React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // ✅ Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ✨ Padrão de aspas
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-double']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  // Regras base
  js.configs.recommended,
  react.configs.flat.recommended
])
