import { defineConfig } from 'vite';

import {
  extensions,
  classicEmberSupport,
  ember,
} from '@embroider/vite';

import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  base: '/absensimahasiswa/',

  plugins: [
    classicEmberSupport(),
    ember(),

    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});