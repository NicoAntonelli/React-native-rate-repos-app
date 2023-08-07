import React from "react"
import { StyleSheet, View } from 'react-native'

import Navbar from "./Navbar"
import RepositoryList from "./repository/RepositoryList"

const Main = () => {
    return (
        <View style={styles.container}>
            <Navbar/>
            <RepositoryList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
})

export default Main
