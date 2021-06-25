import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssUrl from 'postcss-url';
import html from "rollup-plugin-html";
// import copy from 'rollup-plugin-copy';

const { name } = pkg;

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            name
        },
        {
            file: pkg.module,
            format: 'es',
            name
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {})
    ],
    plugins: [
        typescript({ typescript: require('typescript') }),
        postcss({
            inject: false,
            extract: false,
            plugins: [
                autoprefixer(),
                postcssUrl({ url: 'inline', encodeType: 'base64' }),
                cssnano()
            ]
        }),
        html(),
        terser({
            mangle: false
        })
    ]
}