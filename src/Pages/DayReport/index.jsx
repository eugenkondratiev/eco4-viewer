import { useRef, useState } from "react"
import { DAY_REPORT_REF } from "../../utils/constants";
import useReportData from '../../hooks/useReportData'

import { getTodayDate, getYesterdayDate } from "../../utils/date-functions";
import ReportTable from "../../Components/ReportTable/index.jsx";


const DayReportPage = () => {
    // <h2>Day Report page</h2>
    // const [dataString, setDataString] = useState(null)
    const [reportDate, setReportDate] = useState(getTodayDate())
    const [reportRequest, setReportRequest] = useState(null)
    const pickDate = useRef("")

    // eslint-disable-next-line no-unused-vars
    // console.log("todays", getTodayDate(), getYesterdayDate());
    const { reportData,
        isLoading,
        isError
    } = useReportData(DAY_REPORT_REF, reportRequest, [reportRequest], { notNullParameters: true })


    console.log("###render", reportDate, reportRequest, pickDate);

    function updateReportDate(e) {
        // console.log(" setReportDate(e.target.value)");
        // reportDate.current = e.target.value
        setReportDate(e.target.value)
    }

    const formReportRequest = (blr, _reportDate) => {
        if (!_reportDate) return
        const [year, month, day] = _reportDate.split("-")
        setReportRequest(`${blr}${_reportDate ? `?year=${year}&month=${month}&day=${day}` : ""}`)

    }
    const updateReportRequest = (e) => {
        const blr = e.target.dataset.blr
        formReportRequest(blr, reportDate)
    }



    const setYesterdayReportRequest = (e) => {
        // pickDate.current = e.target.dataset.blr;
        const lastDay = getYesterdayDate();
        // setReportDate();
        const blr = e.target.dataset.blr

        formReportRequest(blr, lastDay)

    }
    const setTodayReportRequest = (e) => {

        // pickDate.current = e.target.dataset.blr;
        const toDay = getTodayDate()
        // setReportDate(getTodayDate());

        const blr = e.target.dataset.blr
        formReportRequest(blr, toDay)

    }

    const Spin = () => { return (<>{"requesting data....."}</>) }


    return (
        <div>
            <fieldset>
                <legend>Оберіть дату добового звіту</legend>
                <input type="date" value={reportDate} onChange={updateReportDate}></input>
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
            {reportDate && reportData && reportData.data && !isError && !isLoading && <h3>{`Добовий звіт за ${reportDate}`
            }</h3>}
            {/* {reportRequest && <h4>{DAY_REPORT_REF + "/" + reportRequest}</h4>} */}
            {(isError || isLoading) && <Spin />}
            {/* <DataTable /> */}

            {((isError ?? !isLoading) || reportData && !reportData.data) && <div>Данні за обраний період відсутні або помилкові</div>}

            {reportData?.data && !isError && !isLoading && <ReportTable data={reportData} />}
        </div>
    )
}
export default DayReportPage 
