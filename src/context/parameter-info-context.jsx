/* eslint-disable react/prop-types */
import {
    createContext,
    useState
} from "react";

export const ParameterInfoContext = createContext(null)



export const ParameterInfoProvider = ({
    children
}) => {
    const [parameterInfo, setParameterInfo] = useState(null)


    return (

        <ParameterInfoContext.Provider value={
            {
                parameterInfo,
                setParameterInfo
            }
        } >
            {
                children
            } </ParameterInfoContext.Provider>
    )
}