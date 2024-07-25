import React, { useContext } from 'react';
import clsx from 'clsx';

import styles from './Summary.module.scss';
import FormContext from '~/context/FormContext';

function Summary() {
    const { data } = useContext(FormContext);
    let totalValue = Number(
        data.selectPlan.price
            .split('/')[0]
            .substring(1, data.selectPlan.price.length)
    );
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.main)}>
                    <div className={clsx(styles.planType)}>
                        <div className={clsx(styles.planType__content)}>
                            <p
                                className={clsx(
                                    styles['planType__content-title']
                                )}
                            >
                                {data.selectPlan.title} (
                                {data.selectPlan.note ? 'Year' : 'Month'})
                            </p>
                            <p
                                className={clsx(
                                    styles['planType__content-change']
                                )}
                            >
                                Change
                            </p>
                        </div>
                        <div className={clsx(styles.planType__price)}>
                            {data.selectPlan.price}
                        </div>
                    </div>
                    <div className={clsx(styles.ingredient)}>
                        {data.addOns.map((item, index) => {
                            totalValue += Number(
                                item.price
                                    .split('/')[0]
                                    .substring(1, item.price.length)
                            );
                            return (
                                <div
                                    key={index}
                                    className={clsx(styles.ingredient__item)}
                                >
                                    <p
                                        className={
                                            styles['ingredient__item-title']
                                        }
                                    >
                                        {item.title}
                                    </p>
                                    <p
                                        className={
                                            styles['ingredient__item-price']
                                        }
                                    >
                                        +{item.price}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={clsx(styles.total)}>
                    <p className={clsx(styles.total__title)}>
                        Total (per {data.selectPlan.note ? 'year' : 'month'})
                    </p>
                    <p className={clsx(styles.total__price)}>
                        +${totalValue}/{data.selectPlan.note ? 'year' : 'month'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Summary;
