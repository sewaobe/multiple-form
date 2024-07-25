import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';

import styles from './YourInfo.module.scss';
import InputYourInfo from '~/components/InputYourInfo';
import FormContext from '~/context/FormContext';
function YourInfo() {
    const [dataYourInfo, setDataYourInfo] = useState({});
    const { setData } = useContext(FormContext);
    useEffect(() => {
        setData(prev => {
            prev.yourInfo = dataYourInfo;
            return { ...prev };
        }); // eslint-disable-next-line
    }, [dataYourInfo]);
    return (
        <div className={clsx(styles.wrapper)}>
            <InputYourInfo
                label="Name"
                placeholder="e.g. Stephen King"
                setDataYourInfo={setDataYourInfo}
            />
            <InputYourInfo
                label="Email Address"
                placeholder="e.g. stephenking@lorem.com"
                rule="email"
                setDataYourInfo={setDataYourInfo}
            />
            <InputYourInfo
                label="Phone Number"
                placeholder="e.g. +1 234 567 890"
                rule="phone"
                setDataYourInfo={setDataYourInfo}
            />
        </div>
    );
}

export default YourInfo;
