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

    const submitForm = (values: LoginData) => {
        console.log(values);
    }

    return <Formik
        initialValues={initialValues}
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
