import React from "react"
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from "./RepositoryList"

const Main = () => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={() => Alert.alert("Easter egg", "You found it! Nice!")}>
                <Text style={styles.title}>Rate Repositories App</Text>
            </TouchableNativeFeedback>

            <RepositoryList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    title: { fontSize: 20 }
})

export default Main
