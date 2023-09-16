import React from "react"
import { StyleSheet, Text, View } from 'react-native'
import { Routes, Route } from "react-router-native"

import About from "./about/About"
import Login from "./login/Login"
import Navbar from "./navbar/Navbar"
import RepositoryList from "./repository/RepositoryList"

const Main = () => {
    return (
        <View style={styles.container}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<RepositoryList />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/about" element={<About />}/>
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
