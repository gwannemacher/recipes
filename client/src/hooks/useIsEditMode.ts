import React from 'react';
import { useSearchParams } from 'react-router-dom';

const useIsEditMode = () => {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode');
    return mode === 'edit';
};

export default useIsEditMode;
