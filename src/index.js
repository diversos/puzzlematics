import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardMain from './Components/BoardMain';
import registerServiceWorker from './registerServiceWorker';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<BoardMain />, document.getElementById('root'));
registerServiceWorker();
