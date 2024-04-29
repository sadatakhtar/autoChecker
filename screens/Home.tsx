import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UseSelector, useSelector } from 'react-redux'
import { getTest } from '../src/features/general/generalSlice'


type Props = {}

const Home = (props: Props) => {
    const testRedux = useSelector(getTest);
  return (
    <View>
      <Text>Home</Text>
      <View>
        <Text style={{fontSize: 20, color: 'red'}}>{testRedux}</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})