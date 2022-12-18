import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cleanErrorAction, loadingAction, setErrorAction, successAlertAction } from '../redux/api';

const useFetch = ({ service, globalLoader, callback = () => { }, callNow = false, successAlert = false }) => {

    const dispatch = useDispatch();

    const [resp, setResp] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiCall = async () => {
        try {
            setLoading(true);
            if (globalLoader) {
                dispatch(loadingAction());
            }
            const response = await service();
            const { data, problem } = response?.data;
            setResp(data);
            setError(problem);
        } catch (err) {
            console.log(err);
            setError({ message: 'generic', code: 500 })
        }
    }

    useEffect(() => {
        if (resp) {
            callback();
            if(successAlert) {
                dispatch(successAlertAction());
            } else {
                dispatch(cleanErrorAction());
            }
            setLoading(false);
        } else if (error) {
            dispatch(setErrorAction(error));
            setLoading(false);
        }
    }, [error, resp]);

    useEffect(() => {
        if (callNow) {
            apiCall();
        }
    }, [])

    return [resp, error, apiCall, loading]
}

export default useFetch;
