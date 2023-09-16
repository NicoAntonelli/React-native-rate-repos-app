import React from 'react'
import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import StyledInput from '../common/StyledInput'
import StyledText from '../common/StyledText'
import Theme from '../../Theme'

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginTop: -10,
        marginBottom: 10,
        fontSize: Theme.fontSizes.small
    },
    
})

// interface IProps { name: string, placeholder?: string, secureTextEntry?: boolean, restOfProps?: any[] }

const FormInput = ({name, ...restOfProps}: any) => {
    const [field, meta, helpers] = useField(name)

    return <>
        <StyledInput
            value={field.value}
            onChangeText={(value: string) => helpers.setValue(value)}
            error={meta.error}
            { ...restOfProps } />
        {meta.error &&
            <StyledText style={styles.error}>
                {meta.error}
            </StyledText>
        }
    </>
}

export default FormInput
