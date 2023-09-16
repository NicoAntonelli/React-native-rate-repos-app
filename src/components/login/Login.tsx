import React from "react"
import { Button, StyleSheet, View } from "react-native"
import { Formik } from "formik"

import FormInput from "./FormInput"
import LoginData from "../../entities/LoginData"

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
})

const Login = () => {
    const initialValues: LoginData = {
        email: '',
        password: ''
    }

    const validation = (values: LoginData) => {
        const errors: any = {}

        const mailRegex = /^(([^<>()[\]\\.,;:\s@@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!values.email) errors.email = "Email is required"
        else if (!mailRegex.test(values.email)) errors.email = "Invalid email address"
        
        if (!values.password) errors.password = "Password is required"
        else if (values.password.length < 8) errors.password = "Password should be at least 8 characters long"

        console.log(errors)
        return errors
    }

    const submitForm = (values: LoginData) => {
        console.log(values);
    }

    return <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={values => submitForm(values)}>
        {({handleSubmit}) => {
            return (
                <View style={styles.form}>
                    <FormInput
                        name='email'
                        placeholder="Email"/>
                    <FormInput
                        name='password'
                        placeholder="Password"
                        secureTextEntry/>
                    
                    <Button
                    title='Login'
                    onPress={() => handleSubmit()}/>
                </View>
            )
        }}
    </Formik>
}

export default Login
