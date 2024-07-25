import clsx from 'clsx';
import React, { useId } from 'react';

import styles from './InputAddOns.module.scss';

function InputAddOns({
    title,
    des,
    priceMonth,
    priceYear,
    typeYear,
    ...props
}) {
    const id = useId();
    var handleChange = e => {
        const { checked } = e.target;
        const field = typeYear
            ? { title, description: des, price: priceYear }
            : { title, description: des, price: priceMonth };
        if (checked) props.setDataAddOns(prev => [...prev, field]);
        else {
            props.setDataAddOns(prev =>
                [...prev].filter(field => field.title !== title)
            );
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <label htmlFor={id} className={clsx(styles.inner)}>
                <input
                    type="checkbox"
                    id={id}
                    className={clsx(styles.checkInput)}
                    onChange={handleChange}
                />
                <div className={clsx(styles.content)}>
                    <p className={clsx(styles.content__title)}>{title}</p>
                    <p className={clsx(styles.content__des)}>{des}</p>
                </div>
                <p className={clsx(styles.price)}>
                    +{typeYear ? priceYear : priceMonth}
                </p>
            </label>
        </div>
    );
}

export default InputAddOns;
