import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getData} from '../src/features/general/generalSlice';
import {useSelector} from 'react-redux';
import Btn from '../components/Btn';
import {useNavigation, useRoute} from '@react-navigation/native';
import {colours} from '../assets/SharedStyles';
import StandardHeader from '../components/StandardHeader';
import DetailsDisplayer from '../components/DetailsDisplayer';
import RegDisplayer from '../components/RegDisplayer';

interface SearchResultProps {}

const SearchResultScreen = ({}: SearchResultProps) => {
  const data = useSelector(getData);
  const navigation: any = useNavigation();

  const route = useRoute();
  const {registrationNumber} = route.params as {registrationNumber: string};

  const handleBtn = () => {
    navigation.goBack();
  };

  const handleDefects = () => {
    navigation.navigate('Defects', {
      registrationNumber: registrationNumber,
      data: data,
    });
  };
  return (
    <ScrollView>
      <StandardHeader />
      <RegDisplayer data={data} />

      <View style={styles.body}>
        <View style={styles.generalTitle}>
          <Text style={styles.title}>General details</Text>
        </View>
        <View>
          <DetailsDisplayer data={data?.make} label="Make" />
          <DetailsDisplayer data={data?.colour} label="Color" />
          <DetailsDisplayer
            data={data?.taxStatus}
            label="Tax"
            style={
              data?.taxStatus
                ? {color: colours.$light_green}
                : {color: colours.$red}
            }
            //icon={data?.taxStatus ? 'check' : 'times'}
          />
          <DetailsDisplayer data={data?.taxDueDate} label="Tax Due Date" />
          <DetailsDisplayer
            data={data?.motStatus}
            label="MOT"
            style={
              data?.motStatus
                ? {color: colours.$light_green}
                : {color: colours.$red}
            }
          />
          <DetailsDisplayer
            data={data?.motExpiryDate}
            label="MOT Expiry Date"
          />
          <DetailsDisplayer data={data?.fuelType} label="Fuel Type" />
        </View>
      </View>

      {/* <View>
        <Text style={{fontSize: 20, color: colours.$red}}>
          {JSON.stringify(data)}
        </Text>
      </View> */}
      <View style={styles.btnWrapper}>
        <View>
          <Btn title="Back" onPress={handleBtn} style={{width: '220'}}/>
        </View>
        <View>
          <Btn title="Defects" onPress={handleDefects} style={{width: '120'}}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {},
 
  body: {
    margin: 20,
    padding: 10,
    backgroundColor: colours.$yellow,
    borderWidth: 2,
    borderColor: colours.$black,
    borderRadius: 6,
  },
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
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
