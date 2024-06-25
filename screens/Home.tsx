import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StandardHeader from '../components/StandardHeader';
import Btn from '../components/Btn';

interface HomeProps {}

const Home = () => {
  return (
    <View style={styles.container}>
      <StandardHeader />
      <View style={styles.body}>
        <View>
          <Text style={styles.text}>
            Welcome to AutoChecker, enter a vehicle registration to get a list
            of possible defects or issues which can surface in the near future.
          </Text>
        </View>
        <View>
          <Btn title="Next" onPress={() => {}} style={{ marginTop: 500}}/>
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
