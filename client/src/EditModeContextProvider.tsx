import React, { useState, useEffect, createContext, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

const EditModeContext = createContext();

export const useEditModeContext = () => useContext(EditModeContext);

const EditModeContextProvider = (props) => {
    const [searchParams] = useSearchParams();
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        setIsEditMode(searchParams.get('mode') === 'edit');
    }, []);

    return (
        <EditModeContext.Provider value={isEditMode}>
            {props.children}
        </EditModeContext.Provider>
    );
};

export default EditModeContextProvider;
