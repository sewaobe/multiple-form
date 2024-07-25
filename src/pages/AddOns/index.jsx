import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';

import styles from './AddOns.module.scss';
import InputAddOns from '~/components/InputAddOns';
import FormContext from '~/context/FormContext';

function AddOns() {
    const { data, setData, check } = useContext(FormContext);
    const [dataAddOns, setDataAddOns] = useState([]);
    const [typeYear, setTypeYear] = useState(false);
    useEffect(() => {
        if (dataAddOns.length === 0) check.current = false;
        else check.current = true;
        setData(prev => {
            prev.addOns = dataAddOns;
            return { ...prev };
        }); // eslint-disable-next-line
    }, [dataAddOns]);

    useEffect(() => {
        if (data.selectPlan.hasOwnProperty('note')) {
            setTypeYear(true);
        } // eslint-disable-next-line
    }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <InputAddOns
                title="Online Service"
                des="Access to multiplayer games"
                priceMonth="$1/mo"
                priceYear="$10/yr"
                typeYear={typeYear}
                setDataAddOns={setDataAddOns}
            />
            <InputAddOns
                title="Larger storage"
                des="Extra 1TB of cloud save"
                priceMonth="$2/mo"
                priceYear="$20/yr"
                typeYear={typeYear}
                setDataAddOns={setDataAddOns}
            />
            <InputAddOns
                title="Customizable profile"
                des="Custom theme on your profile"
                priceMonth="$2/mo"
                priceYear="$20/yr"
                typeYear={typeYear}
                setDataAddOns={setDataAddOns}
            />
        </div>
    );
}

export default AddOns;
