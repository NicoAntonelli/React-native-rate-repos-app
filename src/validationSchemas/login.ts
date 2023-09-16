import * as yup from 'yup'

export const LoginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("email is required"),
    password: yup
        .string()
        .min(8, "password should have at least 8 characters")
        .max(127, "the password is too long!")
        .required("password is required")
})
