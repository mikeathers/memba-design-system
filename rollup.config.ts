import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'
import image from '@rollup/plugin-image'

// @ts-ignore
import pkg from './package.json'
import visualizer from 'rollup-plugin-visualizer'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'

const extensions = ['.ts', '.tsx', '.js']

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      visualizer(),
      resolve({
        extensions,
      }),
      copy({
        targets: [{src: './public/assets/icons', dest: './dist'}],
      }),
      commonjs(),
      typescript({tsconfig: 'tsconfig.rollup.json'}),
      terser(),
      json(),
      image(),
    ],
    external: ['react', 'react-dom'],
  },
]
