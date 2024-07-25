import React, { useContext } from 'react';
import clsx from 'clsx';

import styles from './Footer.module.scss';
import FormContext from '~/context/FormContext';

function Footer(props) {
    const { setIsSubmit } = useContext(FormContext);
    return (
        <div className={clsx(styles.wrapper)}>
            <div
                className={clsx(styles.back)}
                onClick={() => {
                    props.setStep(prev => prev - 1);
                }}
            >
                {props.step > 0 ? 'Go Back' : ''}
            </div>
            <button
                className={clsx(styles.continue)}
                onClick={() => {
                    setIsSubmit(prev => prev + 1);
                }}
            >
                {props.step === 3 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    );
}

export default Footer;
