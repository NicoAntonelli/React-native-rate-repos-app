import React from "react"
import StyledText from "../common/StyledText"
import { Linking, StyleSheet, TouchableOpacity, View } from "react-native"
import Theme from "../../Theme"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    link: {
        fontSize: Theme.fontSizes.title,
        textDecorationLine: "underline",
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: "dashed",
        marginTop: 20,
        marginBottom: 10,
        padding: 20,
    }
})

const About = () => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/NicoAntonelli')}>
            <StyledText style={styles.link}>GitHub/NicoAntonelli</StyledText>
        </TouchableOpacity>
    </View>
}

export default About
