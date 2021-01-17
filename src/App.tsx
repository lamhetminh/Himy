import React from 'react';
import Navigation from './routes/Navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './core/redux/store';
class App extends React.Component {
  render() {
    const {store, persistor} = reduxStore();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
