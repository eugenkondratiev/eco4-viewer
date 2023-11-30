import { useEffect, useState } from "react"
import { DAY_REPORT_REF } from "../../utils/constants";
import useReportData from '../../hooks/useReportData'

import { getTodayDate, getYesterdayDate } from "../../utils/date-functions";
import ReportTable from "../../Components/ReportTable/index.jsx";


const DayReportPage = () => {
    <h2>Day Report page</h2>
    const [dataString, setDataString] = useState(null)
    const [reportDate, setReportDate] = useState(getTodayDate())
    const [reportRequest, setReportRequest] = useState(null)

    // eslint-disable-next-line no-unused-vars
    console.log("todays", getTodayDate(), getYesterdayDate());
    const { reportData,
        isLoading,
        isError
    } = useReportData(DAY_REPORT_REF, reportRequest, [reportRequest], { notNullParameters: true })

    useEffect(() => {
        setDataString(reportData && reportData.data
            ? `Добовий звіт за ${dataString}`
            : null)
    }, [reportDate])

    function updateReportDate(e) {
        console.log(" setReportDate(e.target.value)");
        setReportDate(e.target.value)
    }

    const updateReportRequest = (e) => {
        const blr = e.target.dataset.blr
        if (!reportDate) return
        const [year, month, day] = reportDate.split("-")

        setReportRequest(`${blr}${reportDate ? `?year=${year}&month=${month}&day=${day}` : ""}`)

    }

    const Spin = () => { return (<>{"requesting data....."}</>) }

    // const DataTable = () => {
    //     if (isError || isLoading) return <Spin />

    //     if (!reportData) return <Spin />

    //     return (
    //         <div>
    //             {reportData}
    //         </div>
    //     )
    // }
    return (
        <div>
            <h2>Day Report page</h2>
            <fieldset>
                <legend>Оберіть дату звіту</legend>
                <input type="date" value={reportDate} onChange={updateReportDate}></input>

            </fieldset>
            <fieldset>
                <legend>Оберіть звіт</legend>
                <button data-blr="blr4" onClick={updateReportRequest}>Котел4</button>
                <button data-blr="t5" onClick={updateReportRequest}>Турбіна</button>
            </fieldset>
            {/* <h2>{dataString}</h2> */}
            {/* {dataString && <h2>{dataString}</h2>} */}
            {reportRequest && <h4>{DAY_REPORT_REF + "/" + reportRequest}</h4>}
            {(isError || isLoading) && <Spin />}
            {/* <DataTable /> */}

            {reportData && reportData.data && !isError && !isLoading && <ReportTable data={reportData} />}
        </div>
    )
}
export default DayReportPage 
