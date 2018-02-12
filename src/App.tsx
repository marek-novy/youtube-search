import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import Homepage from './containers/homepage/Homepage';
import configureStore from './store/configureStore';

// tslint:disable-next-line:no-submodule-imports
const { store, persistor } = configureStore();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                </Switch>
              </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
