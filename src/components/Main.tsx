import React from "react"
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

const Main = () => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback onPress={() => Alert.alert("Text clicked")}>
                <Text>Rate Repositories App</Text>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  })

export default Main
