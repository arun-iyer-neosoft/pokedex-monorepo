import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

const external = [
	...Object.keys(packageJson.dependencies || {}),
	...Object.keys(packageJson.devDependencies || {}),
	...Object.keys(packageJson.peerDependencies || {}),
];
const rollupConfig = [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			postcss({
				exclude: ['**/input.css'],
			}),
			json(),
			terser(),
		],
		external,
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];

export default rollupConfig;
