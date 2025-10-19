/// <reference types="vite/client" />

import { JSX } from 'vue/jsx-runtime'

declare global {
  namespace JSX {
    interface IntrinsicElements extends JSX.IntrinsicElements {}
  }
}
