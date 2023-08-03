import { resolve } from 'path';
const src = resolve(__dirname, '../src');


export default {
	'@': resolve(src),
	'@pages': resolve(src, 'pages'),
	'@assets': resolve(src, 'assets'),
	'@images': resolve(src, 'assets/images'),
	'@icons': resolve(src, 'assets/icons'),
	'@fonts': resolve(src, 'assets/fonts'),
	'@resources': resolve(src, 'assets/resources'),
	'@hooks': resolve(src, 'react/hooks'),
}
