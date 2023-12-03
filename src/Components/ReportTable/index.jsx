/* eslint-disable react/prop-types */

import formLastRow from "../../utils/form-last-row";
import ReportTableHeader from "../ReportTableHeader";
import ReportTableRow from "../ReportTableRow";
import stl from "./ReportTable.module.scss";
const ReportTable = ({
    data
}) => {
    console.log("ReportTable", data);
    if (!data || !data.data || !Array.isArray(data.data)) return null
    const blr = data.blr;

    return (
        <table className={stl.root}>
            <thead>

                {
                    data && data.data && <ReportTableHeader data={data.params} blr={blr}>

                    </ReportTableHeader>

                }
            </thead>
            <tbody>

                {data && data.data && data.data.map((row, rowIndex) => {
                    // console.log("data.data rowIndex  - ", rowIndex);

                    return <ReportTableRow
                        key={rowIndex}
                        data={row}
                        blr={blr}
                        parameters={data.params}>

                    </ReportTableRow>
                })
                }
                {
                    data && data.data && data.params &&
                    <ReportTableRow
                        data={formLastRow(data)}
                        blr={blr}
                        parameters={data.params}>

                    </ReportTableRow>
                }
            </tbody>

        </table>
    )
}

export default ReportTable