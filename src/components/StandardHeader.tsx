import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colours} from '../../assets/SharedStyles';

interface StandardHeaderProps {}

const StandardHeader = ({}: StandardHeaderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>LOGO</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Auto<Text style={{color: colours.$bright_blue}}>C</Text>hecker
        </Text>
      </View>
    </View>
  );
};

export default StandardHeader;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colours.$darkBlue,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colours.$pale_blue,
    height: 70,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colours.$black,
  },
  logoWrapper: {},
  titleWrapper: {},
});
