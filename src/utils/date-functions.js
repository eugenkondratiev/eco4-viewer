export const getTodayDate = () => {

    // console.log(_lastDay);

    const _now = new Date()

    return _now.toLocaleDateString(
        "ru-UA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).split(".").reverse().join("-")
}


export const getYesterdayDate = () => {

    // console.log(_lastDay);

    const _now = new Date()
    _now.setDate(_now.getDate() - 1)
    return _now.toLocaleDateString(
        "ru-UA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).split(".").reverse().join("-")

}


export const getCurrentMonth = () => {
    return (new Date()).getMonth()
}

export const getLastMonth = () => {

    const mm = new Date()
    mm.setMonth(mm.getMonth() - 1)
    return mm.getMonth()
}