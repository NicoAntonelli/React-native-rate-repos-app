import React from "react"
import { StyleSheet, Text, View } from "react-native"

import Theme from "../../Theme"
import StyledText from "../StyledText"
import { Link, To, useLocation } from "react-router-native"

interface IProps {
    children?: any,
    to: To,
}

const NavbarTab = (props: IProps) => {
    const { children, to } = props
    const { pathname } = useLocation()

    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]
    
    return (
        <Link to={to} underlayColor={""}>
            <StyledText fontWeight="bold" style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const styles = StyleSheet.create({
    text: { color: Theme.colors.gray, paddingHorizontal: 10 },
    active: { color: Theme.colors.white }
})

export default NavbarTab
