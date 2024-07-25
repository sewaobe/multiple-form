import clsx from 'clsx';
import React from 'react';

import styles from './ConfirmText.module.scss';
function ConfirmText() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <img src="/images/icon-thank-you.svg" alt="No art" />
                <p className={clsx(styles.title)}>Thank you!</p>
                <p className={clsx(styles.content)}>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    );
}

export default ConfirmText;
