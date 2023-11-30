/* eslint-disable react/prop-types */

import ReportTableHeader from "../ReportTableHeader";
import ReportTableRow from "../ReportTableRow";
import stl from "./ReportTable.module.scss";
const ReportTable = ({
    data
}) => {

    console.log("#### RENDER ReportTable.  data = ", data);
    if (!data || !data.data || !Array.isArray(data.data)) return null

    return (
        <table className={stl.root}>
            <thead>

                {
                    data && data.data && <ReportTableHeader data={data.params}>

                    </ReportTableHeader>

                }
            </thead>
            <tbody>

                {data && data.data && data.data.map((row, rowIndex) => {
                    // console.log("data.data rowIndex  - ", rowIndex);

                    return <ReportTableRow key={rowIndex} data={row} parameters={data.params}></ReportTableRow>
                })
                }
            </tbody>

        </table>
    )
}

export default ReportTable