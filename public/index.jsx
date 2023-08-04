import React from 'react';
import ReactDOM from 'react-dom/client';
import { Landing } from '@/pages';


// modules
import '@/styles/index.scss';
import 'aos/dist/aos.css';



// vars
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<>
	<Landing />
</>)
