import {  useState } from "react"
import { MONTH_REPORT_REF, UA_MONTH, REPORT_YEARS } from "../../utils/constants";
import useReportData from '../../hooks/useReportData'
import { Select } from "antd";
import { getCurrentMonth } from "../../utils/date-functions";
import ReportTable from "../../Components/ReportTable/index.jsx";
import stl from "./MonthReport.module.scss";
// import { useDebouncedEffect } from "../../hooks/useDebouncedEffect/index.js";
const { Option } = Select;


const MonthReportPage = () => {
    <h2>Month Report page</h2>
    // const [dataString, setDataString] = useState(null)
    // const reportDate = useRef(getTodayDate())

    // eslint-disable-next-line no-unused-vars
    const [reportYear, setReportYear] = useState((new Date().getFullYear()))
    // eslint-disable-next-line no-unused-vars
    const [reportMonth, setReportMonth] = useState(getCurrentMonth())

    // eslint-disable-next-line no-unused-vars
    const [reportRequest, setReportRequest] = useState(null)

    // eslint-disable-next-line no-unused-vars
    // console.log("todays", getTodayDate(), getYesterdayDate());
    const { reportData,
        isLoading,
        isError
    } = useReportData(MONTH_REPORT_REF, reportRequest, [reportRequest], { notNullParameters: true })

    // useEffect(() => {
    //     console.log("reportData  ", reportData);
    // }, [reportData])


    const updateReportRequest = (e) => {

        const blr = e.target.dataset.blr
        setReportRequest(`${blr}${reportMonth && reportYear ? `?year=${reportYear}&month=${reportMonth + 1}` : ""}`)

    }


    const Spin = () => { return (<>{"requesting data....."}</>) }


    // console.log("reportYear", reportYear)
        ;
    return (
        <div>
            <fieldset>
                <legend>Оберіть місяць та рік звіту</legend>
                {/* <input type="date" value={reportDate.current} onChange={updateReportDate}></input> */}
                <Select
                    defaultValue={(new Date().getFullYear())}
                    value={reportYear}
                    onChange={(value) => {
                        console.log("e year", value);
                        setReportYear(value)
                    }}
                    showSearch
                    className={stl['year-selector']}
                    style={{ width: "25ch" }}
                    // loading={cupsLoading}
                    // onChange={ffSelectHandler}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Рік"


                >
                    {REPORT_YEARS.map((year, yearIndex) => {
                        return <Option key={yearIndex} value={year}>{year}</Option>
                    })}
                </Select>
                <Select
                    defaultValue={getCurrentMonth()}
                    value={reportMonth}
                    showSearch
                    className={stl['month-selector']}
                    style={{ width: "25ch" }}
                    onChange={(value) => {
                        console.log("e month", value);
                        setReportMonth(value)
                    }}
                    // loading={cupsLoading}
                    // onChange={ffSelectHandler}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Місяць"

                >
                    {UA_MONTH.map((month, monthIndex) => {
                        return <Option key={monthIndex} value={monthIndex}>{month}</Option>
                    })}

                </Select>
            </fieldset>
            <fieldset>
                <legend>Оберіть звіт</legend>
                <button data-blr="blr1" onClick={updateReportRequest}>Котел1</button>
                <button data-blr="blr4" onClick={updateReportRequest}>Котел4</button>
                <button data-blr="t5" onClick={updateReportRequest}>Турбіна</button>

                {/* <button data-blr="blr4" onClick={setLastMonthReportRequest}>Котел4.Вчора</button>
                <button data-blr="t5" onClick={setLastMonthReportRequest}>Турбіна.Вчора</button>
                <button data-blr="blr4" onClick={setCurrentMonthReportRequest}>Котел4.Сьогодні</button>
                <button data-blr="t5" onClick={setCurrentMonthReportRequest}>Турбіна.Сьогодні</button> */}

            </fieldset>
            {(isError || isLoading) && <Spin />}
            {((isError ?? !isLoading) || reportData && !reportData.data) && <div>Данні за обраний період відсутні або помилкові</div>}

            {/* <DataTable /> */}

            {reportData && reportData.data && !isError && !isLoading && <ReportTable data={reportData} />}
        </div>
    )
}
export default MonthReportPage 
