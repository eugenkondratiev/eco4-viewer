import {
    useEffect,
    useState
} from "react";
import fetchApiData from "../../model/fetch-api-data";


export default function useData(endpoint, parameters, dependencies = [], options = {
    notNullParameters: false
}) {

    const [reportData, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {

                setIsLoading(true)
                if (options.notNullParameters && !parameters) {
                    /* empty */
                } else {
                    let answer
                    try {

                        answer = await fetchApiData(`${endpoint}/${parameters && parameters}`)

                        // console.log("SUSSECC FETCH ANSWER ", answer);
                    } catch (error) {
                        console.log("#### fetchApiData error -", error.message);
                        setIsError(true);

                    }
                    if (answer.error) {
                        console.log("#### useData fetching error ", answer.error);

                        setIsError(true);
                    } else {
                        // setData(answer.data[0]);
                        setData(answer.data);
                        setIsError(false);
                    }
                }
            } catch (error) {
                console.log("#### useData error ", error);
                setIsError(true);
            } finally {
                setIsLoading(false)
            }
        }
        getData().catch(err => console.log(" #### useData getData error - ", err))
    }, dependencies)

    return {
        reportData,
        isLoading,
        isError
    }

}