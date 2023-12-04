export default async (_apiRef) => {
    // console.log("### _apiRef  - ", _apiRef);
    if (!_apiRef) return {
        count: 0,
        data: [],
        error: "FAULT_API_REF"
    }
    let response
    try {
        response = await fetch(_apiRef, {
            // mode: "cors",
            // credentials: 'include',
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "cache-control": "no-cache",
            },
            //referrer: "about:client", // или "" для того, чтобы не послать заголовок Referer,
            // или URL с текущего источника
            //referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
            // mode: " no-cors", // same-origin, no-cors
        });

        // console.log(` #### ${_apiRef} - ", ${JSON.stringify(response,null, " ")}`);
        // console.log("#### response  - ", response.status);

    } catch (error) {
        console.log("fetch(_apiRef) error , ", error);
    }

    if (!response) throw Error("FETCH_ERROR");
    if (response.status !== 200) throw response.status > 500 ? Error("TIME_LIMIT_EXCEEDED") : Error(response.error);

    const data = await response.json();
    console.log( " #### FETCH response - " , data);


    return data.data && data.data.length ? {
        count: data.data.length,
        data: data,
        error: undefined
    } : {
        count: 0,
        data: [],
        error: data.message
    }
}