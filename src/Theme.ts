const Theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        secondary: '#ddd',
        white: '#fff',
        black: '#222'
    },
    fontSizes: {
        title: 20,
        subHeader: 16,
        body: 14,
        small: 12
    },
    fonts: {
        main: 'System'
    },
    fontWeights: {
        normal: '400' as Weight,
        bold: '700' as Weight
    }
}

type Weight = "400" | "700" | "normal" | "bold" | "100" | "200" | "300" | "500" | "600" | "800" | "900" | undefined

export default Theme
