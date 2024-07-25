import React, { useContext } from 'react';
import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';
import FormContext from '~/context/FormContext';

function DefaultLayout({ children, ...props }) {
    const { check } = useContext(FormContext);
    return (
        <div className={clsx(styles.wrapper)}>
            <form
                action=""
                method="POST"
                className={clsx(styles.container)}
                onSubmit={e => {
                    e.preventDefault();
                    if (check.current) {
                        props.setStep(prev => prev + 1);
                    }
                    // if(props.step === 4) -> PUT data BE...
                }}
            >
                <div className={clsx(styles.content)}>
                    <SideBar step={props.step} />
                    <div className={clsx(styles.right)}>
                        {props.step !== 4 ? (
                            <Header step={props.step} />
                        ) : (
                            <></>
                        )}
                        <div className={clsx(styles.content__main)}>
                            {children}
                        </div>
                    </div>
                </div>
                {props.step !== 4 ? (
                    <Footer step={props.step} setStep={props.setStep} />
                ) : (
                    <></>
                )}
            </form>
        </div>
    );
}

export default DefaultLayout;
