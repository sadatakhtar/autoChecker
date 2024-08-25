import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import getAccessTokenCall from '../authentication/auth';
import StandardHeader from '../components/StandardHeader';
import RegDisplayer from '../components/RegDisplayer';
import {colours} from '../../assets/SharedStyles';
import Btn from '../components/Btn';
import DetailsDisplayer from '../components/DetailsDisplayer';
import SubHeading from '../components/SubHeading';
import NewHeader from '../components/NewHeader';
import BreadCrumTitle from '../containers/BreadCrumTitle';


const DefectsScreen = () => {
  const [motData, setMotData] = useState<any | null>(null);
  const [motDefects, setMotDefects] = useState<any | null>(null);
  const route = useRoute();
  const {registrationNumber, data} = route.params as {
    registrationNumber: string;
    data: any;
  };
  const [accessToken, setAccessToken] = useState('');
  const navigation = useNavigation();

  console.log('Registration Number: ', registrationNumber);
  //const url = `https://api.check-mot.service.gov.uk/trade/vehicles/${registrationNumber}/defects`;
  const url2 = `https://history.mot.api.gov.uk/v1/trade/vehicles/registration/${registrationNumber}`;
 // const url3 = `https://beta.check-mot.service.gov.uk//trade/vehicles/mot-tests?registration={${registrationNumber}}`;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      margin: 20,
      padding: 10,
      backgroundColor: colours.$yellow,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 6,
    },
    defectWrapper: {
      marginHorizontal: 150,
      marginTop: 20,
      height: 80,
      padding: 10,
      backgroundColor: motDefects > 0 ? colours.$red : 'green',
      borderWidth: 1,
      borderColor: colours.$black,
      borderRadius: 40,
    },
    defextText: {
      color: colours.$white,
      fontSize: 30,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 5,
      fontWeight: 'bold',
    },
    defectSubheading: {
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: colours.$black,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenCall();
        setAccessToken(token);

        console.log('>>>>>>>>>>>>>>>>>>>>ACCESS TOKEN STATE: ',accessToken,);
        const response = await axios.get(url2, {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': process.env.REACT_APP_API_KEY_3,
          },
        });
        //console.log('DATA STATE: ', JSON.stringify(response?.data));
        setMotData(response?.data);
        setMotDefects(response?.data?.motTests[0]?.defects.length ?? 0);
      } catch (error) {
        console.error('API Call Failed:', error);
      }
    };
    fetchData();
  }, []);

  console.log('---->>>>>>>>>>>>>>>MOt Data: ', JSON.stringify(data));

  const handleBtn = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View>
        <NewHeader />
        <BreadCrumTitle label="Back" navigation={navigation} />
        <RegDisplayer data={data} />

        <View style={styles.defectWrapper}>
          <Text style={styles.defextText}>{motDefects ?? 0}</Text>
        </View>
        <View style={styles.defectSubheading}>
          <Text style={styles.text}>
            {motData?.motTests[0]?.defects.length == 1
              ? 'Possible defect'
              : 'Possible defects'}
          </Text>
        </View>

        <View style={styles.body}>
          <SubHeading heading="Details"/>
          <DetailsDisplayer data={motData?.motTests[0].odometerValue} label='Mileage' />
          <DetailsDisplayer data={motData?.motTests.length} label='Previous Mots:' />
          
        </View>

        <View style={styles.body}>
          <SubHeading heading="Breakdown of Defects"/>
          <View>
            {motData?.motTests[0]?.defects.map((defect: any, index: number) => (
              <DetailsDisplayer
                key={index}
                data={defect.text}
                label={`Defect ${index + 1}`}
                label2={`${defect.type}`}
              />
            ))}
          </View>
    

        </View>
        {/* <Btn title="Back" onPress={handleBtn} style={{ marginHorizontal: 20, width: 120}}/> */}
      </View>
    </ScrollView>
  );
};

export default DefectsScreen;


