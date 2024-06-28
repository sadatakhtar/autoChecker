import React from 'react';
import type {PropsWithChildren} from 'react';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

export function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
