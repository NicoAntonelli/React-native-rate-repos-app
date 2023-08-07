import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Constants from 'expo-constants'

import Theme from "../Theme"
import StyledText from "./StyledText"

interface IProps { }

const Navbar = (props: IProps) => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight="bold" style={styles.text}>Repositories</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight*2,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: Theme.colors.navbarPrimary
    },
    text: { color: Theme.colors.white }
})

export default Navbar
