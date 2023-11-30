/* eslint-disable react/prop-types */

import stl from "./ReportTableRow.module.scss";
const ReportTableRow = ({ data, parameters }) => {
    if (!data || !Array.isArray(data)) return null

    return (
        <tr className={stl.root}>
            {data.map((value, columnIndex) => {
                if (columnIndex === 0) return <td key={columnIndex}>{value}</td>
                const digitAfterDot = parameters[columnIndex - 1].format.split(".")[1]
                if (!parameters || !parameters[columnIndex-1]) console.log("Problem value -", columnIndex, parameters[columnIndex - 1]);
                return <td key={columnIndex}>{parameters
                    ? Number(value).toFixed(
                        digitAfterDot
                    )
                    : " - "}</td>
            })}
        </tr>
    )
}

export default ReportTableRow