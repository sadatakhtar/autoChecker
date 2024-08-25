import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Entypo';
import {colours} from '../../assets/SharedStyles';

interface DetailsDisplayerProps {
  data: any;
  label: string;
  label2?: string;
  style?: any;
  icon?: string;
}

const DetailsDisplayer = ({
  data,
  label,
  style,
  icon,
  label2,
}: DetailsDisplayerProps) => {
  return (
    <View style={styles.detailsWrapper}>
      <View style={{ flexDirection: 'column'}}>
        <Text style={styles.text}>{label}: </Text>
        {label2 && <Text style={styles.text}>Type: {label2}</Text>}
      </View>

      <View style={styles.dataWrapper}>
        <Text style={[styles.text, styles.dataText, style]}>
          {!icon ? (
            data
          ) : (
            <View style={{flex: 1}}>
              <Ionicons
                name={icon}
                size={20}
                color={
                  data === 'Not valid' ? colours.$red : colours.$bright_green
                }
              />
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
    paddingVertical: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
