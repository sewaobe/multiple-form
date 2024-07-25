import React, { useContext, useEffect, useId, useState, useRef } from 'react';
import clsx from 'clsx';

import styles from './InputYourInfo.module.scss';
import FormContext from '~/context/FormContext';

function InputYourInfo({
    label,
    placeholder,
    messageInvalid = 'This field is required',
    rule = 'required',
    ...props
}) {
    const [isValid, setIsValid] = useState(true);
    const { handleValidator, isSubmit, check } = useContext(FormContext);
    const id = useId();
    const inputRef = useRef(null);

    check.current = true;
    var handleBlur = e => {
        setIsValid(handleValidator(e.target, rule, label));
        props.setDataYourInfo(prev => {
            prev[`${label}`] = e.target.value;
            return { ...prev };
        });
    };

    useEffect(() => {
        let isValid = handleValidator(inputRef.current, rule, label);
        if (isSubmit > 0) {
            setIsValid(isValid);

            if (!isValid) check.current = false;
        }
    }, [isSubmit]);
    return (
        <div className={clsx(styles.wrapper, !isValid && styles.inValid)}>
            <div className={clsx(styles.header)}>
                <label htmlFor={id}>{label}</label>
                <p className={clsx(styles.messageInvalid)}>
                    {!isValid && messageInvalid}
                </p>
            </div>
            <input
                ref={inputRef}
                id={id}
                className={clsx(styles.input)}
                type="textbox"
                placeholder={placeholder}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default InputYourInfo;
