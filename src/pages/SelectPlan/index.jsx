import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './SelectPlan.module.scss';
import InputSelectPlan from '~/components/InputSelectPlan';
import FormContext from '~/context/FormContext';

function SelectPlan() {
    const [typeYear, setTypeYear] = useState(false);
    const [dataSelectPlan, setDataSelectPlan] = useState({});
    const { setData, check } = useContext(FormContext);
    useEffect(() => {
        if (typeYear)
            setDataSelectPlan({
                title: 'Arcade',
                price: '$90/yr',
                note: '2 months free',
            });
        else setDataSelectPlan({ title: 'Arcade', price: '$9/mo' });
    }, [typeYear]);

    useEffect(() => {
        setData(prev => {
            prev.selectPlan = dataSelectPlan;
            return { ...prev };
        });
        check.current = true; // eslint-disable-next-line
    }, [dataSelectPlan]);
    return (
        <div className={clsx(styles.main)}>
            <div className={clsx(styles.wrapper)}>
                <InputSelectPlan
                    image="/images/icon-arcade.svg"
                    title="Arcade"
                    priceMonth="$9/mo"
                    priceYear="$90/yr"
                    note="2 months free"
                    typeYear={typeYear}
                    dataSelectPlan={dataSelectPlan}
                    setDataSelectPlan={setDataSelectPlan}
                />
                <InputSelectPlan
                    image="/images/icon-advanced.svg"
                    title="Advanced"
                    priceMonth="$12/mo"
                    priceYear="$120/yr"
                    note="2 months free"
                    typeYear={typeYear}
                    dataSelectPlan={dataSelectPlan}
                    setDataSelectPlan={setDataSelectPlan}
                />
                <InputSelectPlan
                    image="/images/icon-pro.svg"
                    title="Pro"
                    priceMonth="$15/mo"
                    priceYear="$150/yr"
                    note="2 months free"
                    typeYear={typeYear}
                    dataSelectPlan={dataSelectPlan}
                    setDataSelectPlan={setDataSelectPlan}
                />
            </div>
            <div className={clsx(styles.toggle)}>
                <p
                    className={clsx(styles.toggle__type)}
                    style={
                        typeYear
                            ? { color: ' hsl(231, 11%, 63%)' }
                            : { color: 'hsl(243, 100%, 62%)' }
                    }
                >
                    Monthly
                </p>
                <div className={clsx(styles.toggle__main)}>
                    <input type="checkbox" id="toggle" />
                    <label
                        htmlFor="toggle"
                        onClick={() => {
                            setTypeYear(prev => !prev);
                        }}
                    >
                        {' '}
                    </label>
                </div>
                <p
                    className={clsx(styles.toggle__type)}
                    style={
                        !typeYear
                            ? { color: ' hsl(231, 11%, 63%)' }
                            : { color: 'hsl(243, 100%, 62%)' }
                    }
                >
                    Yearly
                </p>
            </div>
        </div>
    );
}

export default SelectPlan;
