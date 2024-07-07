import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import getAccessTokenCall from '../src/authentication/auth';
import StandardHeader from '../components/StandardHeader';
import RegDisplayer from '../components/RegDisplayer';
import { colours } from '../assets/SharedStyles';

const DefectsScreen = () => {
  const [motData, setMotData] = useState<any | null>(null);
  const [motDefects, setMotDefects] = useState<any | null>(null);
  const route = useRoute();
  const {registrationNumber, data} = route.params as {
    registrationNumber: string;
    data: any;
  };
  //const [accessToken, setAccessToken] = useState('');

  console.log('Registration Number: ', registrationNumber);
  const url = `https://api.check-mot.service.gov.uk/trade/vehicles/${registrationNumber}/defects`;
  const url2 = `https://history.mot.api.gov.uk/v1/trade/vehicles/registration/${registrationNumber}`;
  const url3 = `https://beta.check-mot.service.gov.uk//trade/vehicles/mot-tests?registration={${registrationNumber}}`;

  //let apiData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const token = await getAccessTokenCall();
        //setAccessToken(token);
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL3RhcGkuZHZzYS5nb3YudWsiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNDU1YjgyNy0yNDRmLTRjOTctYjViNC1jZTVkMTNiNGQwMGMvIiwiaWF0IjoxNzIwMzgyMTQxLCJuYmYiOjE3MjAzODIxNDEsImV4cCI6MTcyMDM4NjA0MSwiYWlvIjoiRTJkZ1lLaW9PQkgrNmg5WG9rTDZKOWFkOHlNUEFnQT0iLCJhcHBpZCI6IjAzZTgyMjY4LTQ2Y2YtNDBkZC05ODM4LTQ1OTc2NWUxNTg1MCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2E0NTViODI3LTI0NGYtNGM5Ny1iNWI0LWNlNWQxM2I0ZDAwYy8iLCJvaWQiOiJlOTVmNWEzNC1iNGFhLTQ3MjMtYTU2MC0yZWY3NzgwMzA0NzkiLCJyaCI6IjAuQVVjQUo3aFZwRThrbDB5MXRNNWRFN1RRREZSR2EtSU5mSTFKbTNjbFJzczdYeGhIQUFBLiIsInJvbGVzIjpbInRhcGkucHVibGljIl0sInN1YiI6ImU5NWY1YTM0LWI0YWEtNDcyMy1hNTYwLTJlZjc3ODAzMDQ3OSIsInRpZCI6ImE0NTViODI3LTI0NGYtNGM5Ny1iNWI0LWNlNWQxM2I0ZDAwYyIsInV0aSI6IjFDN1h4dGRSTWt1aFNoUzIySkVmQUEiLCJ2ZXIiOiIxLjAifQ.FLjGjk1T5S9r_2VMTJF9WCVJ_vHOqiXKXNSNh-S7x-cWZLPDnMJYBoslebmi4EFg2v3Dm2azXyqxbIIkesZT1YUOG3lczGuptoz5-WGWRKUAuonOV831ndVjw627UKVlfR0PUDuj6ers7aMntJSav6cUbqTuySNx6sJ_-Rp_Lb1RCbSp2-NocwNm0gvUhJHbu2zKKZmqzflYB8_oTmLmHQb5Ip26Z2AHFdfROD64zIX_rm74byRPIn4RwVix_5qHIzRsD6lk7dBkJPsIvQGGWeeyar6YVZMIHRez-UtFWJbPqkYpcBCx03WhZ8t4yWh0kzmkuNFU0Gi09jtNZsLcgA";
        console.log('Token ------------------>>>>>>>>>>>>>', token);
        // console.log(
        //   '-------->>>>>>>>>>>>>>> ACCESS TOKEN STATE: ',
        //   accessToken,
        // );
        //const REACT_APP_API_KEY = 'your_api_key'; // Define the REACT_APP_API_KEY variable here
        const response = await axios.get(url2, {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-api-key': process.env.REACT_APP_API_KEY_3,
          },
        });
        console.log('DATA STATE: ', JSON.stringify(response?.data));
        //apiData = response.data;
        setMotData(response?.data)
        setMotDefects(response?.data?.motTests[0]?.defects.length ?? 0);
      } catch (error) {
        console.error('API Call Failed:', error);
      }
    };
    fetchData();
  }, []);

  console.log('---->>>>>>>>>>>>>>>MOt Data: ', JSON.stringify(data));
 // console.log('------------------<<>>>>>>>>> NUM OF DEFECTS: ', motDefects)
  return (
    <ScrollView>
      <View>
        <StandardHeader />
        <RegDisplayer data={data} />

        <View style={styles.defectWrapper}>
          <Text style={styles.defextText}>{motDefects ?? 0}</Text>
        </View>
        <View style={styles.defectSubheading}>
            <Text style={styles.text}>{motData?.motTests[0]?.defects.length == 1 ? 'Possible defect' : 'Possible defects'}</Text>
        </View>

        <View style={styles.body}></View>
      </View>

      {/* <View>
        {data ? (
            <Text>{JSON.stringify(data)}</Text>
        ): (
            <Text>Loading....</Text>
        )}
      </View> */}
    </ScrollView>
  );
};

export default DefectsScreen;

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
    backgroundColor: '#ff0',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 6,
  },
  defectWrapper: {
    marginHorizontal: 150,
    height: 80,
    padding: 10,
    backgroundColor: colours.$dark_red,
    borderWidth: 1,
    borderColor: colours.$black,
    borderRadius: 60,
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
    //textAlign: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colours.$black,
  }
});
