import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configure from './redux/store'
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={configure()}>
        <Router>
            <App />
        </Router>
    </Provider>
),
document.getElementById('root'));

// registerServiceWorker();
