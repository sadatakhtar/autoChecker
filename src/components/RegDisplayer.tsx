import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colours} from '../../assets/SharedStyles';

interface RegDisplayerProps {
  data: any;
}

const RegDisplayer = ({data}: RegDisplayerProps) => {
  return (
    <View style={styles.numberPlate}>
      <Text style={styles.plateText}>{data.registrationNumber}</Text>
    </View>
  );
};

export default RegDisplayer;

const styles = StyleSheet.create({
  numberPlate: {
    borderWidth: 4,
    borderColor: colours.$black,
    borderRadius: 6,
    backgroundColor: colours.$yellow,
    padding: 10,
    paddingVertical: 10,
    margin: 20,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plateText: {
    fontSize: 35,
    color: colours.$black,
    fontWeight: 'bold',
  },
});
