import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Paragraph from '../../components/Paragraph';
import { colours } from '../../../assets/SharedStyles';
import NewHeader from '../../components/NewHeader';

interface HomeProps {}
interface NavProps {
  navigate: (arg0: string) => void;
}

const Home = ({}: HomeProps) => {
  const navigation: NavProps = useNavigation();

  return (
    <View style={styles.container}>
      <NewHeader />
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
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.$white
  },
  text: {
    fontSize: 18,
    color: colours.$black
  },
  body: {
    padding: 10,
    marginVertical: 20,
  },
});
