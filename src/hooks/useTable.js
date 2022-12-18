import { useState, useEffect } from 'react';

const useTable = ({apiCall = () => {}} = {}) => {

    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useState('');
    const [call, setCall] = useState(false);

    const onPressSearch = () => {
		setOffset(0);
		setCall(!call);
	}

	const onSetPage = (newPage) => {
		setOffset(newPage);
		setCall(!call);
	}

    
	useEffect(() => {
		apiCall();
	}, [call]);

    return {
        offset,
        setOffset,
        setSearch,
        onSetPage,
        search,
        call,
        onPressSearch,

    }
}

export default useTable
