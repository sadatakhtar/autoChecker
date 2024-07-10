import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colours } from '../../assets/SharedStyles';

type Props = {
  summary?: string;
};

const Paragraph = ({summary}: Props) => {
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.text}>{summary}</Text>
    </View>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colours.$black
  },
  textWrapper: {
    padding: 10,
    marginVertical: 6,
  },
});