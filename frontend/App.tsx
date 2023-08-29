import React from 'react';
import { Provider } from 'react-redux'
import TabMain from './src/navigation/tab/tabMain';
import { store } from './src/redux/store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <TabMain />
    </Provider>
  );
}


export default App;
