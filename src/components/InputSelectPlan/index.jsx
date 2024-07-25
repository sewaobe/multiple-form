import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './InputSelectPlan.module.scss';

function InputSelectPlan({
    image,
    title,
    priceMonth,
    priceYear,
    note,
    typeYear,
    ...props
}) {
    const [selected, setSelected] = useState(false);
    const selectRef = useRef(null);
    useEffect(() => {
        if (props.dataSelectPlan.note)
            if (!typeYear) delete props.dataSelectPlan.note; // Year -> Month: Delete field note
        if (props.dataSelectPlan.title === title) {
            setSelected(true);
        } else setSelected(false);
        // eslint-disable-next-line
    }, [props.dataSelectPlan]);
    return (
        <div
            style={
                selected
                    ? { borderColor: 'hsl(243, 100%, 62%)' }
                    : { borderColor: 'hsl(229, 24%, 87%)' }
            }
            className={clsx(styles.wrapper)}
            onClick={() => {
                for (let i = 0; i < selectRef.current.children.length; i++) {
                    const key =
                        selectRef.current.children[i].className.split('_')[1];
                    const value = selectRef.current.children[i].innerText;
                    props.setDataSelectPlan(prev => {
                        prev[key] = value;
                        return { ...prev };
                    });
                }
            }}
        >
            <div className={clsx(styles.inner)}>
                <img src={image} alt="No art" className={clsx(styles.image)} />
                <div ref={selectRef} className={clsx(styles.content)}>
                    <p className={clsx(styles.title)}>{title}</p>
                    <p className={clsx(styles.price)}>
                        {!typeYear ? priceMonth : priceYear}
                    </p>
                    {typeYear && <p className={clsx(styles.note)}>{note}</p>}
                </div>
            </div>
        </div>
    );
}

export default InputSelectPlan;
