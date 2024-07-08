import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Entypo';
import {colours} from '../assets/SharedStyles';

interface DetailsDisplayerProps {
  data: any;
  label: string;
  style?: any;
  icon?: string;
}

const DetailsDisplayer = ({
  data,
  label,
  style,
  icon,
}: DetailsDisplayerProps) => {
  return (
    <View style={styles.detailsWrapper}>
      <Text style={styles.text}>{label}: </Text>
      <View style={styles.dataWrapper}>
        <Text style={[styles.text, styles.dataText, style]}>
          {/* {icon && <Ionicons name='check' size={20} color="green" />} */}
          {!icon ? (
            data
          ) : (
            <View style={{ flex: 1, }}>
              <Ionicons name='check' size={20} color="green" />
            </View>
          )}
        </Text>
      </View>
    </View>
  );
};

export default DetailsDisplayer;

const styles = StyleSheet.create({
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconStyle: {
    color: colours.$blue,
  },
  dataWrapper: {
    borderWidth: 1,
    borderColor: colours.$black,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.$black,
    borderRadius: 6,
  }, 
  dataText: {
    color: colours.$white,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
