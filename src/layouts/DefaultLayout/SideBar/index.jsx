import React from 'react';
import clsx from 'clsx';

import styles from './SideBar.module.scss';
import StepBox from '~/components/StepBox';

function SideBar({ ...props }) {
    return (
        <aside className={clsx(styles.wrapper)}>
            <StepBox step={1} title="your info" stepForm={props.step} />
            <StepBox step={2} title="select plan" stepForm={props.step} />
            <StepBox step={3} title="add-ons" stepForm={props.step} />
            <StepBox step={4} title="summary" stepForm={props.step} />
        </aside>
    );
}

export default SideBar;
