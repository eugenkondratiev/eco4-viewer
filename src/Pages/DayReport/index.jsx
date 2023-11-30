import { useRef, useState } from "react"
import { DAY_REPORT_REF } from "../../utils/constants";
import useReportData from '../../hooks/useReportData'

import { getTodayDate, getYesterdayDate } from "../../utils/date-functions";
import ReportTable from "../../Components/ReportTable/index.jsx";


const DayReportPage = () => {
    <h2>Day Report page</h2>
    // const [dataString, setDataString] = useState(null)
    const reportDate = useRef(getTodayDate())
    const [reportRequest, setReportRequest] = useState(null)

    // eslint-disable-next-line no-unused-vars
    // console.log("todays", getTodayDate(), getYesterdayDate());
    const { reportData,
        isLoading,
        isError
    } = useReportData(DAY_REPORT_REF, reportRequest, [reportRequest], { notNullParameters: true })

    // useEffect(() => {
    //     setDataString(reportData && reportData.data
    //         ? `Добовий звіт за ${reportDate}`
    //         : null)
    // }, [reportDate])

    function updateReportDate(e) {
        // console.log(" setReportDate(e.target.value)");
        reportDate.current = e.target.value
    }

    const updateReportRequest = (e) => {
        const blr = e.target.dataset.blr
        if (!reportDate.current) return
        const [year, month, day] = reportDate.current.split("-")

        setReportRequest(`${blr}${reportDate.current ? `?year=${year}&month=${month}&day=${day}` : ""}`)

    }

    const setYesterdayReportRequest = (e) => {
        reportDate.current = getYesterdayDate()
        updateReportRequest(e)

    }
    const setTodayReportRequest = (e) => {
        reportDate.current = getTodayDate()
        updateReportRequest(e)

    }

    const Spin = () => { return (<>{"requesting data....."}</>) }


    return (
        <div>
            <fieldset>
                <legend>Оберіть дату добового звіту</legend>
                <input type="date" value={reportDate.current} onChange={updateReportDate}></input>
            </fieldset>
            <fieldset>
                <legend>Оберіть звіт</legend>
                <button data-blr="blr4" onClick={updateReportRequest}>Котел4</button>
                <button data-blr="t5" onClick={updateReportRequest}>Турбіна</button>
                <button data-blr="blr4" onClick={setYesterdayReportRequest}>Котел4.Вчора</button>
                <button data-blr="t5" onClick={setYesterdayReportRequest}>Турбіна.Вчора</button>
                <button data-blr="blr4" onClick={setTodayReportRequest}>Котел4.Сьогодні</button>
                <button data-blr="t5" onClick={setTodayReportRequest}>Турбіна.Сьогодні</button>
            </fieldset>            {/* <h2>{dataString}</h2> */}
            {reportDate.current && reportData && reportData.data && !isError && !isLoading && <h3>{`Добовий звіт за ${reportDate.current}`
            }</h3>}
            {/* {reportRequest && <h4>{DAY_REPORT_REF + "/" + reportRequest}</h4>} */}
            {(isError || isLoading) && <Spin />}
            {/* <DataTable /> */}

            {reportData && reportData.data && !isError && !isLoading && <ReportTable data={reportData} />}
        </div>
    )
}
export default DayReportPage 
