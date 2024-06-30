import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getData} from '../src/features/general/generalSlice';
import {useSelector} from 'react-redux';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import {colours} from '../assets/SharedStyles';
import StandardHeader from '../components/StandardHeader';

interface SearchResultProps {}

const SearchResultScreen = ({}: SearchResultProps) => {
  const data = useSelector(getData);
  const navigation: any = useNavigation();

  const handleBtn = () => {
    navigation.goBack();
  };
  return (
    <View>
      <StandardHeader />

      <View
        style={{
          borderWidth: 4,
          borderColor: colours.$black,
          borderRadius: 6,
          backgroundColor: colours.$yellow,
          padding: 10,
          paddingVertical: 10,
          margin: 20,
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            color: colours.$black,
            fontWeight: 'bold',
          }}>
          {data.registrationNumber}
        </Text>
      </View>

      <View>
        {/* <Text style={{fontSize: 20, color: colours.$red}}>{JSON.stringify(data)}</Text> */}
      </View>
      <View>
        <Btn title="Back" onPress={handleBtn} />
      </View>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({});
