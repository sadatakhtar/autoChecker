import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colours} from '../../assets/SharedStyles';

interface SubHeadingProps {
    heading: string;
    
}

const SubHeading = ({heading}: SubHeadingProps) => {
  return (
    <View style={styles.generalTitle}>
      <Text style={styles.title}>{heading}</Text>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  generalTitle: {
    borderBottomWidth: 1,
    borderBottomColor: colours.$black,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.$black,
  },
});
