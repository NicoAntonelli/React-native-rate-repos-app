import React from "react"
import { StyleSheet, Text } from "react-native"
import Theme from "../theme"

interface IProps {
    children: any,
    fontSize?: string,
    fontWeight?: string,
    color?: string,
    style?: any
}

const StyledText = (props: IProps, ...restOfProps: any[]) => {
    const { children, color, fontSize, fontWeight, style } = props

    const textStyles = [
        styles.text,
        fontSize == 'title' && styles.title,
        fontSize == 'subHeader' && styles.subHeader,
        fontSize == 'small' && styles.small,
        fontWeight == 'bold' && styles.bold,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        color == 'textPrimary' && styles.colorTextPrimary,
        color == 'textSecondary' && styles.colorTextSecondary,
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Theme.colors.textPrimary,
        fontSize: Theme.fontSizes.body,
        fontFamily: Theme.fonts.main,
        fontWeight: Theme.fontWeights.normal
    },
    title: { fontSize: Theme.fontSizes.title },
    subHeader: { fontSize: Theme.fontSizes.subHeader },
    small: { fontSize: Theme.fontSizes.small },
    bold: { fontWeight: Theme.fontWeights.bold },
    colorPrimary: { color: Theme.colors.primary },
    colorSecondary: { color: Theme.colors.secondary },
    colorTextPrimary: { color: Theme.colors.textPrimary },
    colorTextSecondary: { color: Theme.colors.textSecondary },
})

export default StyledText
