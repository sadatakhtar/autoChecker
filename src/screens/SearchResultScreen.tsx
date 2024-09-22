import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getData} from '../features/general/generalSlice';
import {useSelector} from 'react-redux';
import Btn from '../components/Btn';
import {useNavigation, useRoute} from '@react-navigation/native';
import {colours} from '../../assets/SharedStyles';
import DetailsDisplayer from '../components/DetailsDisplayer';
import RegDisplayer from '../components/RegDisplayer';
import SubHeading from '../components/SubHeading';
import NewHeader from '../components/NewHeader';
import BreadCrumTitle from '../containers/BreadCrumTitle';


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
      <NewHeader />
      <BreadCrumTitle label="Back" navigation={navigation} />
      <RegDisplayer data={data} />

      <View style={styles.body}>
        <SubHeading heading="General details" />
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
            icon="check"
          />
          <DetailsDisplayer data={data?.taxDueDate} label="Tax Due Date" />
          <DetailsDisplayer
            data={data?.motStatus}
            label="MOT"
            style={
              data?.motStatus === 'Valid'
                ? {color: colours.$light_green}
                : {color: colours.$red}
            }
            icon={
              data?.motStatus === 'Not valid' ? 'circle-with-cross' : 'check'
            }
          />
          <DetailsDisplayer
            data={data?.motExpiryDate}
            label="MOT Expiry Date"
          />
          <DetailsDisplayer data={data?.fuelType} label="Fuel Type" />
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <View style={styles.innerBtnWrapper}>
          
          <Btn title="Defects" onPress={handleDefects} style={{width: 157, backgroundColor: 'black'}} textStyles={{color: 'white'}} />
          <Btn title="Continue" onPress={handleDefects} style={{width: 157, backgroundColor: 'black'}} textStyles={{color: 'white'}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.$white,
  },

  body: {
    margin: 20,
    padding: 10,
    backgroundColor: colours.$yellow,
    borderWidth: 1,
    borderColor: colours.$black,
    borderRadius: 6,
  },

  btnWrapper: {
    marginHorizontal: 10,
  },

  innerBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginBottom: 20,
  }
});
