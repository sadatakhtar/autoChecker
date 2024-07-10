//import {REACT_APP_API_URL, REACT_APP_API_KEY} from '@env';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Btn from '../components/Btn';
import StandardHeader from '../components/StandardHeader';
import {useNavigation} from '@react-navigation/native';
import {colours} from '../../assets/SharedStyles';
import Paragraph from '../components/Paragraph';
import axios from 'axios';
import {setData} from '../features/general/generalSlice';
import {useDispatch} from 'react-redux';
import NewHeader from '../components/NewHeader';

interface DashboardScreenProps {}

const DashboardScreen = ({}: DashboardScreenProps) => {
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const handleBackBtn = () => {
    console.log('Back button pressed');
    navigation.goBack();
  };

  const handleSubmit = async () => {
    console.log('Vehicle Registration Submitted:', vehicleRegistration);
    const apiUrl = process.env.REACT_APP_API_URL ?? '';
    const data = {
      registrationNumber: vehicleRegistration,
    };

    const config = {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      },
    };

    try {
      const response = await axios.post(apiUrl, data, config);
      console.log('API Response:', response.data);
      dispatch(setData(response.data));
      navigation.navigate('Search Result', {
        registrationNumber: vehicleRegistration,
      });
    } catch (error) {
      console.error('API Call Failed:', error);
      // TODO: Handle error add Alert
    }
  };

  const handleCancel = () => {
    console.log('Cancel button pressed');
    setVehicleRegistration('');
  };
  return (
    <View style={styles.container}>
      <NewHeader />

      <View style={{paddingHorizontal: 10, marginTop: 30}}>
        <Paragraph
          summary="Simply enter the vehicle registration number, and let our powerful 
        algorithms do the rest. Within seconds, you'll receive a 
        comprehensive list of potential issues or current defects associated
        with the car you're interested in."
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Enter Vehicle Registration</Text>
        <TextInput
          style={styles.input}
          value={vehicleRegistration}
          onChangeText={setVehicleRegistration}
          placeholder="Registration..."
        />
        <View style={styles.btnWrapper}>
          <Btn
            title="Submit"
            onPress={handleSubmit}
            style={{width: 150, height: 40}}
            textStyles={{fontSize: 14}}
          />
          <Btn
            title="Cancel"
            onPress={handleCancel}
            style={{width: 100, backgroundColor: colours.$red, height: 40}}
            textStyles={{color: colours.$white, fontSize: 14}}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Btn
          title="Back"
          onPress={handleBackBtn}
          style={{marginHorizontal: 20, width: 120}}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;

// Add styles for the input
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.$white
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colours.$white,
  },
  btnContainer: {
    marginTop: 50,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: colours.$white,
    backgroundColor: colours.$black,
    margin: 20,
    padding: 20,
    borderRadius: 5,
  },
  titleWrapper: {
    padding: 20,
  },
  title: {
    color: colours.$white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    padding: 10,
    color: colours.$yellow,
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
