import React from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';
const dataHeaderOfForm = [
    {
        title: 'Personal info',
        content: 'Please provide your name, email address, and phone number.',
    },
    {
        title: 'Select your plan',
        content: 'You have the option of monthly or yearly billing.',
    },
    {
        title: 'Pick add-ons',
        content: 'Add-ons help enhance your gaming experience.',
    },
    {
        title: 'Finishing up',
        content: 'Double-check everything looks OK before confirming.',
    },
];
function Header(props) {
    return (
        <header className={clsx(styles.wrapper)}>
            <h1 className={clsx(styles.title)}>
                {dataHeaderOfForm[props.step].title}{' '}
            </h1>
            <p className={clsx(styles.content)}>
                {dataHeaderOfForm[props.step].content}
            </p>
        </header>
    );
}

export default Header;
