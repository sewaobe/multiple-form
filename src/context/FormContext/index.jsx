import React, { createContext, useRef, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [isSubmit, setIsSubmit] = useState(0);
    const check = useRef(true);

    const handleValidator = (input, rule, label) => {
        if (rule === 'required') {
            if (input.value.trim() === '') {
                return false;
            }
            return true;
        } else if (rule === 'email') {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/; //eslint-disable-line
            if (!regex.test(input.value)) {
                return false;
            }

            return true;
        } else if (rule === 'phone') {
            if (!(input.value.length >= 10 && Number(input.value))) {
                return false;
            }

            return true;
        }
    };
    return (
        <FormContext.Provider
            value={{
                handleValidator,
                isSubmit,
                setIsSubmit,
                check,
                data,
                setData,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
