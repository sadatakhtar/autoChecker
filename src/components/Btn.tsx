import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colours } from '../../assets/SharedStyles';

interface BtnProps {
  title: string;
  style?: object;
  textStyles?: object;
  onPress: () => void;
}

const Btn = ({title, style, textStyles, onPress}: BtnProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={[styles.text, textStyles]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.$pale_blue,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colours.$black
  },
  text: {
    color: colours.$black,
    fontSize: 20,
    fontWeight: 'condensedBold',
  },

});
