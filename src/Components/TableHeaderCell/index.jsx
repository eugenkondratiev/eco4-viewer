/* eslint-disable react/prop-types */

import { useContext, useEffect, useRef } from "react";
import stl from "./TableHeaderCell.module.scss";
import { ParameterInfoContext } from "../../context/parameter-info-context";
// import { ParameterInfoContext } from "../../App";
// eslint-disable-next-line react/prop-types
const TableHeaderCell = ({ data }) => {
    const tdRef = useRef(null)

    const { setParameterInfo } = useContext(ParameterInfoContext);

    useEffect(() => {
        const td = tdRef.current

        // console.log(data, td);
        if (!td) return
        // eslint-disable-next-line no-unused-vars
        const handleTdClick = (event) => {
            // console.log("event", event.target);
            // alert(JSON.stringify(data, null, " "))
            setParameterInfo({ ...data })
        }
        td.addEventListener('pointerdown', handleTdClick)
        return () => {
            td.removeEventListener('pointerdown', handleTdClick)
        }
    }, [])

    return (
        <td className={stl[`root-td`]} ref={tdRef}>
            {data.tag}{data.eu ? ", " : ""}{data.eu}

        </td>
    );

}

export default TableHeaderCell;