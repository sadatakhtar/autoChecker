import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StandardHeader from '../../components/StandardHeader';
import Btn from '../../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Paragraph from '../../components/Paragraph';

interface HomeProps {}
interface NavProps {
  navigate: (arg0: string) => void;
}

const Home = ({}: HomeProps) => {
  const navigation: NavProps = useNavigation();

  const handleBtn = () => {
    console.log('btn pressed');
    navigation.navigate('Dashboard');
  };
  return (
    <View style={styles.container}>
      <StandardHeader />
      <View style={styles.body}>
        <Paragraph
          summary="Welcome to AutoChecker, your ultimate companion for stress-free car
        buying! Are you a first-time car buyer feeling overwhelmed by the
        uncertainties of purchasing a vehicle? Or perhaps you're a cautious
        shopper who wants to ensure you're making a wise investment? Look no
        further!"
        />
        <Paragraph
          summary="AutoChecker is designed with you in mind. 
        Our goal is to empower you with 
        knowledge, helping you make informed decisions and avoid unexpected 
        surprises down the road."
        />
        <Paragraph
          summary="Say goodbye to buyer's remorse and hello to 
        confidence with AutoChecker. Start your journey towards a 
        worry-free car buying experience today!"
        />
        <View>
          <Btn
            title="Click to proceed"
            onPress={handleBtn}
            style={{marginTop: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
  },
  text: {
    fontSize: 18,
  },
  body: {
    padding: 10,
    marginVertical: 20,
  },
});
