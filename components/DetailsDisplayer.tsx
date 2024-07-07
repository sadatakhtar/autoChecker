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
      <Text style={[styles.text, style]}>
        {!icon ? (
          data
        ) : (
          <View>
            <Ionicons name={icon} size={20} color="red" />
          </View>
        )}
      </Text>
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
});
