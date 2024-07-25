import React from 'react';
import clsx from 'clsx';

import styles from './StepBox.module.scss';
function StepBox({ step, title, ...props }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div
                className={clsx(styles.number)}
                style={
                    step === props.stepForm + 1 ||
                    (props.stepForm === 4 && step === 4)
                        ? {
                              backgroundColor: 'hsl(206, 94%, 87%)',
                              color: 'hsl(213, 96%, 18%)',
                          }
                        : {
                              backgroundColor: 'transparent',
                              color: 'white',
                          }
                }
            >
                {step}
            </div>
            <div className={clsx(styles.content)}>
                <p className={clsx(styles.content__step)}>STEP {step}</p>
                <p className={clsx(styles.content__title)}>{title}</p>
            </div>
        </div>
    );
}

export default StepBox;
