import React, { useEffect, useState } from 'react';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import SplashScreen from './src/screens/Home/SplashScreen';

export function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);

    return () => clearTimeout(timer)
  },[])
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          {isLoading ? <SplashScreen /> : <TabNavigator />}
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
