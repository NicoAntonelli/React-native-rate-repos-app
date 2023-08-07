const parseThousands = (value: number) => {
    if (!value) return
    if (value <= 1000) return String(value)

    return `${Math.round(value / 1000) / 10}k`
}

const Numbers = { parseThousands }
export default Numbers
