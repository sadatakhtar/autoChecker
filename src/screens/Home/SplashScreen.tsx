import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colours} from '../../../assets/SharedStyles';
import * as Animatable from 'react-native-animatable';

interface SplashScreenProps {
  //navigation: undefined | any;
}

const SplashScreen = ({}: SplashScreenProps) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <Animatable.Text
          style={styles.text}
          duration={2000}
          animation="fadeInDownBig">
          Auto<Text style={{color: colours.$yellow}}>C</Text>hecker
        </Animatable.Text>

        <Animatable.Text
          style={styles.subText}
          duration={3000}
          animation="lightSpeedIn">
          Your ultimate car companion
        </Animatable.Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.$black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colours.$white,
    fontSize: 40,
    fontWeight: 'bold',
  },
  subText: {
    color: colours.$white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerWrapper: {
    justifyContent: 'center',
    alignItems  : 'center',
  }
});
