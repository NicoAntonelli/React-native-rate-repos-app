import React from "react"
import { StyleSheet, Text, View } from 'react-native'

import Navbar from "./navbar/Navbar"
import RepositoryList from "./repository/RepositoryList"
import { Routes, Route } from "react-router-native"

const Main = () => {
    const working = <Text>Working on it...</Text>

    return (
        <View style={styles.container}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<RepositoryList />}/>
                <Route path="/login" element={working}/>
                <Route path="/about" element={working}/>
            </Routes>
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
