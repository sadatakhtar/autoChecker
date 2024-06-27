import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  summary: string;
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
    fontSize: 18,
  },
  textWrapper: {
    padding: 10,
    marginVertical: 6,
  },
});