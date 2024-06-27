//import {REACT_APP_API_URL, REACT_APP_API_KEY} from '@env';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Btn from '../components/Btn';
import StandardHeader from '../components/StandardHeader';
import {useNavigation} from '@react-navigation/native';
import {colours} from '../assets/SharedStyles';
import Paragraph from '../components/Paragraph';
import axios from 'axios';

interface DashboardScreenProps {
  // Define your props here
}

const DashboardScreen = ({}: DashboardScreenProps) => {
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const navigation = useNavigation();

  const handleBackBtn = () => {
    console.log('Back button pressed');
    navigation.goBack();
  };

  const handleSubmit = async () => {
    console.log('Vehicle Registration Submitted:', vehicleRegistration);
    const apiUrl = process.env.REACT_APP_API_URL ?? '';
    console.log('process.env.REACT_APP_API_URL ----------------> ', process.env.REACT_APP_API_URL )
    console.log('process.env.REACT_APP_API_KEY ----------------> ', process.env.REACT_APP_API_KEY)
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
      // TODO: navigate to next screen and pass the response data or store response in redux
    } catch (error) {
      console.error('API Call Failed:', error);
      // TODO: Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <View style={styles.container}>
      <StandardHeader />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Paragraph
          summary="Simply enter the vehicle registration number, and let our powerful 
        algorithms do the rest. Within seconds, you'll receive a 
        comprehensive list of potential issues or current defects associated
        with the car you're interested in."
        />
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
            onPress={handleSubmit}
            style={{width: 100, backgroundColor: colours.$red, height: 40}}
            textStyles={{color: colours.$white, fontSize: 14}}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Btn title="Back" onPress={handleBackBtn} />
      </View>
    </View>
  );
};

export default DashboardScreen;

// Add styles for the input
const styles = StyleSheet.create({
  container: {
    // Your existing styles
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btnContainer: {
    marginTop: 50,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: colours.$blue,
    margin: 20,
    padding: 20,
    borderRadius: 5,
  },
  titleWrapper: {
    padding: 20,
  },
  title: {
    color: colours.$black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    padding: 10,
    color: colours.$black,
    fontWeight: 'bold',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
