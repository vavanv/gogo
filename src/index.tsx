// Support Babel 7.4
import 'core-js/stable';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'typeface-roboto';
import 'normalize.css';

import { createRoot } from 'react-dom/client';

import App from 'src/app/index';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);
