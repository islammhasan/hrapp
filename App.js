import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>HR APP</Text>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
