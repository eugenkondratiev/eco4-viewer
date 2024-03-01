/* eslint-disable react/prop-types */

import stl from "./ReportTableRow.module.scss";
const ReportTableRow = ({ data, parameters, blr, noHours }) => {
    if (!data || !Array.isArray(data)) return null



    const swapRowsForBlr1 = (row, blr) => {
        const _row = [...row];
        const w = _row.pop()
        const [dt, q, ...rest] = _row;

        const blr1row = [dt, q, w, ...rest];
        // if (blr == "blr1") console.log(w, blr1row);
        return blr == "blr1" || blr == "blr2" ? blr1row

            : row
    }
    return (
        <tr className={stl.root}>
            {
                swapRowsForBlr1(
                    data.map((value, columnIndex) => {
                        if (columnIndex === 0) {
                            const [_hours, _hoursQuantity] = value.split("&")
                            // if (_hoursQuantity) console.log(_hours, _hoursQuantity);
                            return <td key={columnIndex}>{noHours ? _hours.slice(0, -9) : _hours}{_hoursQuantity && <p className={stl.superscript}>{_hoursQuantity}</p>}</td>
                        }
                        let digitAfterDot = 0
                        try {

                            digitAfterDot = parameters[columnIndex - 1].format.split(".")[1]
                        } catch (error) {
                            console.log(parameters[columnIndex - 1], error.message);

                        }

                        if (!parameters || !parameters[columnIndex - 1]) console.log("Problem value -", columnIndex, parameters[columnIndex - 1]);
                        return <td key={columnIndex}>{parameters
                            ? Number(value).toFixed(
                                digitAfterDot
                            )
                            : " - "}</td>
                    })
                    , blr)

            }
        </tr>
    )
}

export default ReportTableRow