const SERVER_IP = "http://178.158.238.89"
const SERVER_PORT = 3000

// const SERVER_IP = "http://127.0.0.1"
// const SERVER_PORT = 3005
export const API_HOST = `${SERVER_IP}:${SERVER_PORT}/`
// export const API_HOST = `/api/`

export const DAY_REPORT_REF = API_HOST + "day"
export const MONTH_REPORT_REF = API_HOST + "month"
export const UA_MONTH = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
]

export const REPORT_YEARS = [...Array(10)].map((x,index)=>index + 2018) 
