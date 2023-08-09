import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import Constants from 'expo-constants'

import Theme from "../../Theme"
import NavbarTab from "./NavbarTab"

interface IProps { }

const Navbar = (props: IProps) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <NavbarTab to="/">Repositories</NavbarTab>
                <NavbarTab to="/login">Login</NavbarTab>
                <NavbarTab to="/about">About</NavbarTab>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: Constants.statusBarHeight + 15,
        paddingHorizontal: 10,
        backgroundColor: Theme.colors.navbarPrimary
    },
    scroll: {
        paddingBottom: 10,
    }
})

export default Navbar
