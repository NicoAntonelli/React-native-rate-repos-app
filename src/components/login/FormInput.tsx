import React from 'react'
import { useField } from 'formik'

import StyledInput from '../common/StyledInput'

// interface IProps { name: string, placeholder?: string, secureTextEntry?: boolean, restOfProps?: any[] }

const FormInput = ({name, ...restOfProps}: any) => {
    const [field, meta, helpers] = useField(name)

    return <StyledInput
        value={field.value}
        onChangeText={(value: string) => helpers.setValue(value)}
        { ...restOfProps } />
}

export default FormInput
