import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getData} from '../src/features/general/generalSlice';
import {useSelector} from 'react-redux';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import { colours } from '../assets/SharedStyles';

interface SearchResultProps {}

const SearchResultScreen = ({}: SearchResultProps) => {
  const data = useSelector(getData);
  const navigation: any = useNavigation();

  const handleBtn = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>SearchResultScreen</Text>
      <View>
        <Text style={{fontSize: 20, color: colours.$red}}>{JSON.stringify(data)}</Text>
      </View>
      <View>
        <Btn title="Back" onPress={handleBtn} />
      </View>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({});
