/* eslint-disable react/prop-types */

import stl from "./ReportTableHeader.module.scss";
const ReportTableHeader = ({ data }) => {
    if (!data || !Array.isArray(data)) return null

    return (
        <tr className={stl.root}>
            <td >Час</td>
            {data.map((cell, columnIndex) => {

                return <td key={columnIndex}>{cell.tag}{cell.eu?", ":""}{cell.eu}</td>
            })}
        </tr>
    )
}

export default ReportTableHeader