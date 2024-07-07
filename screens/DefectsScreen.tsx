import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import getAccessTokenCall from '../src/authentication/auth';
import StandardHeader from '../components/StandardHeader';
import RegDisplayer from '../components/RegDisplayer';

const DefectsScreen = () => {
  //const [data, setData] = useState(null);
  const route = useRoute();
  const {registrationNumber, data} = route.params as {registrationNumber: string, data: any};
  //const [accessToken, setAccessToken] = useState('');

  console.log('Registration Number: ', registrationNumber);
  const url = `https://api.check-mot.service.gov.uk/trade/vehicles/${registrationNumber}/defects`;
  const url2 = `https://history.mot.api.gov.uk/v1/trade/vehicles/registration/${registrationNumber}`;
  const url3 = `https://beta.check-mot.service.gov.uk//trade/vehicles/mot-tests?registration={${registrationNumber}}`;

  let apiData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const token = await getAccessTokenCall();
        //setAccessToken(token);
        const token =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL3RhcGkuZHZzYS5nb3YudWsiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hNDU1YjgyNy0yNDRmLTRjOTctYjViNC1jZTVkMTNiNGQwMGMvIiwiaWF0IjoxNzIwMzc3ODkzLCJuYmYiOjE3MjAzNzc4OTMsImV4cCI6MTcyMDM4MTc5MywiYWlvIjoiRTJkZ1lLZ0xyM1hWTzcxcTZqT21mWGI3d2xObkF3QT0iLCJhcHBpZCI6IjAzZTgyMjY4LTQ2Y2YtNDBkZC05ODM4LTQ1OTc2NWUxNTg1MCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2E0NTViODI3LTI0NGYtNGM5Ny1iNWI0LWNlNWQxM2I0ZDAwYy8iLCJvaWQiOiJlOTVmNWEzNC1iNGFhLTQ3MjMtYTU2MC0yZWY3NzgwMzA0NzkiLCJyaCI6IjAuQVVjQUo3aFZwRThrbDB5MXRNNWRFN1RRREZSR2EtSU5mSTFKbTNjbFJzczdYeGhIQUFBLiIsInJvbGVzIjpbInRhcGkucHVibGljIl0sInN1YiI6ImU5NWY1YTM0LWI0YWEtNDcyMy1hNTYwLTJlZjc3ODAzMDQ3OSIsInRpZCI6ImE0NTViODI3LTI0NGYtNGM5Ny1iNWI0LWNlNWQxM2I0ZDAwYyIsInV0aSI6IlBrTVYyemRyRlVDT2drS0c5dW9pQUEiLCJ2ZXIiOiIxLjAifQ.T2IgwETlYSZnL2dnlxuBY9q2IdA9CAJt1pI8aDajaETvUlhVFl2vGgBP0PvzcMBl5dpr73Ncg6flffo9xk0gR7iU82QzvP_1BJ_iQvxAUWxNnYgUCgGWJKSV-9PtW7z4_yZfCCwmmxvCFLJ5LLc0oO0xRGcSqGEsG8YiXRsrmyfILwiEuvzyJWUOehj5QTXjXKr7F36yhOvg6W5QzoH0Dr59cV64XIEL7VGjec1SWLVRNeX5Rm2EqnUZh-DtwK-Ja9aCp9LFUIMCA2ctPXrOHRhlxh1Xig22Rw9TOUNgkEm1z_cxlRhEoLsQvHml3T6LWwGfozMTK_GXnDCalaXihQ';
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
        apiData = response.data;
      } catch (error) {
        console.error('API Call Failed:', error);
      }
    };
    fetchData();
  }, []);

  console.log('---->>>>>>>>>>>>>>>MOt Data: ', JSON.stringify(data));
  return (
    <ScrollView>
      <View>
        <StandardHeader />
        <RegDisplayer data={data} />

        <View style={styles.body}>
            <View>
                <Text>This vehicle has 0 defects</Text>
            </View>
        </View>
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
    
});
