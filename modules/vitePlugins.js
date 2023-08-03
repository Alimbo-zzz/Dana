import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import AutoZip from 'vite-plugin-auto-zip';



export default [
	react(),
	legacy({ targets: ['IE >= 11'] }),
	AutoZip()
];
