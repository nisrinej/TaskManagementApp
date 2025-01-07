import { useCallback, useState } from "react";
import api from "../api";

const useFetch = () => {
    const [state, setState] = useState({
        loading: false,
        data: null,
        successMsg: "",
        errorMsg: "",
      });

    const fetchData = useCallback(async (config) => {
        setState(state => ({ ...state, loading: true }));
        try {
            const { data } = await api.request(config);
      setState({
        loading: false,
        data,
        successMsg: data.msg || "success",
        errorMsg: ""
      });
     
        return Promise.resolve(data);
      
        } catch (error) {
            const msg = error.response?.data?.msg || error.message || "error";
      setState({
        loading: false,
        data: null,
        errorMsg: msg,
        successMsg: ""
      });
           
      return Promise.reject();
        } 
    }, []);

    return {fetchData, state };
};

export default useFetch;