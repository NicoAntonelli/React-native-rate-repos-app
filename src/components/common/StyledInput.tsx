import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import Theme from '../../Theme'

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Theme.colors.gray,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    errorField: {
        border: 1,
        borderColor: 'red'
    }
})

const StyledInput = ({styleProps = {}, error, ...restOfProps}: any) => {
    const inputStyle = [
        styles.textInput,
        error && styles.errorField,
        styleProps
    ]

    return <TextInput style={inputStyle} {...restOfProps} />
}

export default StyledInput
