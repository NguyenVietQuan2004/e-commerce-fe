import { useEffect, useState } from 'react';

function useDebounced(value) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const timeOutID = setTimeout(() => {
            setDebounced(value);
        }, 600);

        return () => clearTimeout(timeOutID);
    }, [value]);

    return debounced;
}

export default useDebounced;
