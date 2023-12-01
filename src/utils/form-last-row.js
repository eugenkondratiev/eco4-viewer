const formLastRow = ({
    data,
    params
}) => {
    const reportLength = data.length;
    const resultRow = data.reduce((result, row, rowIndex) => {
        if (rowIndex === 0) result.push("Загал")
        row.forEach((valueString, columnIndex) => {
            if (columnIndex === 0) return
            const parameter = params[columnIndex - 1]
            if (rowIndex === 0) result.push(parameter.type < 2 ? 0.0 : +valueString)
            if (parameter.type === 0) {
                result[columnIndex] += +valueString / reportLength
                return
            }
            if (parameter.type === 1) {
                result[columnIndex] += +valueString
                return
            }
            if (parameter.type === 2) {
                if (result[columnIndex] < +valueString) {
                    result[columnIndex] = +valueString
                }
                return
            }
            if (parameter.type === 3) {
                if (result[columnIndex] > +valueString) {
                    result[columnIndex] = +valueString
                }
                return
            }
        })
        return [...result]
    }, [])

    // console.log("##################### resultRow", resultRow);

    return resultRow
}


export default formLastRow