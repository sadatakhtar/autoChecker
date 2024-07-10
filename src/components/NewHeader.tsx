import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colours} from '../../assets/SharedStyles';

interface NewHeaderProps {}

const NewHeader = ({}: NewHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* <View>
        <Text>LOGO</Text>
      </View> */}
      <View style={styles.titleWrapper}>
        <Text style={styles.text}>
          Auto<Text style={{color: colours.$yellow}}>C</Text>hecker
        </Text>
      </View>
    </View>
  );
};

export default NewHeader;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colours.$black,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colours.$black,
    height: 100,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colours.$white,
  },
  logoWrapper: {},
  titleWrapper: {
    paddingHorizontal: 20
  },
});
