import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Entypo';

interface BreadCrumTitleProps {
  label: string;
  navigation: any;
}

const BreadCrumTitle = ({label, navigation}: BreadCrumTitleProps) => {
    const handleOnPress = () => {
    navigation.goBack();
    }
  return (
    <Pressable onPress={handleOnPress}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Ionicons name="arrow-with-circle-left" size={40} color="black" />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BreadCrumTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    marginVertical: 6,
  },
  iconWrapper: {
    marginHorizontal: 10,
  },
  textWrapper: {},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
