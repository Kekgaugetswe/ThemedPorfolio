//this is where we are goin to link our app component to the html file

import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);
//we use createRoot instead of render because it allows us to attach a single-page application (SPA) to the DOM without needing

//we import App here, which is the main component of our application    