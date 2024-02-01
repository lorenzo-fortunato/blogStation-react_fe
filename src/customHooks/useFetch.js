import { useEffect, useState } from "react";

// custom hook

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {         // solo per simulare le tempistiche di una richiesta ad un'api (che qui non stiamo facendo, avendo messo i nostri dati in un json e utlizzando json server)
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok) {
                        throw Error('Cound not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name == 'AbortError') {
                        console.log("fetch aborted");
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;