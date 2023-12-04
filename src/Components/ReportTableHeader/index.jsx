/* eslint-disable react/prop-types */

import stl from "./ReportTableHeader.module.scss";
const ReportTableHeader = ({ data, blr }) => {
    if (!data || !Array.isArray(data)) return null
    const swapRowsForBlr1 = (row, blr) => {
        const _row= [...row]

        if (blr !== "blr1" && blr !== "blr2") return _row

        const  w = _row.pop();
        const [q, ...rest] = _row;
        const blr1row = [q, w, ...rest];
        // if (blr == "blr1") console.log(w, blr1row);

        return  blr1row

    }

    return (

        <tr className={stl.root}>
            <td >Час</td>
            {swapRowsForBlr1(
                data.map((cell, columnIndex) => {

                    return <td key={columnIndex}>{cell.tag}{cell.eu ? ", " : ""}{cell.eu}</td>
                })
                , blr)

            }
        </tr>

    )
}

export default ReportTableHeader