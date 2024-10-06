
import React, { useEffect, useState } from 'react'
function useDataFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('API Failed');
            }
            const result = await response.json();
            console.log(result);
            setData(result);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useDataFetch