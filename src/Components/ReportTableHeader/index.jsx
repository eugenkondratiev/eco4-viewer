/* eslint-disable react/prop-types */


import TableHeaderCell from "../TableHeaderCell";
import stl from "./ReportTableHeader.module.scss";

import { ELECTRIC_PARAMETERS_QUANTITY } from "../../utils/constants";

const ReportTableHeader = ({ data, blr }) => {
    if (!data || !Array.isArray(data)) return null
    const swapRowsForBlr1 = (row, blr) => {
        const _row = [...row]

        if (blr !== "blr1" && blr !== "blr2") {
            if (blr == "el") return _row.slice(0, ELECTRIC_PARAMETERS_QUANTITY)
            return _row
        }

        const w = _row.pop();
        const [q, ...rest] = _row;
        const blr1row = [q, w, ...rest];

        // if (blr == "blr1") console.log(w, blr1row);

        return blr1row

    }

    return (

        <tr className={stl.root}>
            <td >Час</td>
            {swapRowsForBlr1(
                data.map((cell, columnIndex) => {

                    return <TableHeaderCell key={columnIndex} data={cell}>
                        {/* {cell.tag}{cell.eu ? ", " : ""}{cell.eu} */}
                    </TableHeaderCell>
                })
                , blr)

            }
        </tr>

    )
}

export default ReportTableHeader