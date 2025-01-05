import { useCallback, useState } from "react";
import api from "../api";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = useCallback(async (url) => {
        try {
            let response = await api.get(url);
            setData(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, loading, error, fetchData };
};

export default useFetch;