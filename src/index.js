import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configure from './redux/store'
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={configure()}>
        <Router>
            <Route render={({ history }) => (
                <App history={history} />
            )} />
        </Router>
    </Provider>
),
document.getElementById('root'));

// registerServiceWorker();
