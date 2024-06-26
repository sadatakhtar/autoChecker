import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import { useNavigation } from '@react-navigation/native'

interface DashboardScreenProps {
    
}

const DashboardScreen = ({}: DashboardScreenProps) => {
    const navigation = useNavigation()

    const handleBackBtn = () => {
        console.log('Back button pressed')
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
      <Text>DashboardScreen</Text>
      <View style={styles.btnContainer}>
        <Btn title="Back" onPress={handleBackBtn} />
      </View>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    btnContainer: {
        marginTop: 630
    }
})