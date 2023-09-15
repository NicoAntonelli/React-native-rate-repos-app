import { Platform } from "react-native"

const Theme = {
    colors: {
        primary: '#F44',
        secondary: '#ddd',
        textPrimary: '#24292e',
        textSecondary: '#586069',
        navbarPrimary: '#24292e',
        navbarRed: '#F11',
        white: '#fff',
        gray: '#888',
        black: '#222'
    },
    fontSizes: {
        title: 20,
        subHeader: 16,
        body: 14,
        small: 12
    },
    fonts: {
        main: Platform.select({
            ios: 'San Francisco',
            android: 'Roboto',
            default: 'System'
        }),
    },
    fontWeights: {
        normal: '400' as Weight,
        bold: '700' as Weight
    }
}

type Weight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined

export default Theme
